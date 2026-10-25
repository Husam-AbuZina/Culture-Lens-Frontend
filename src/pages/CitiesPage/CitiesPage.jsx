import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { getAllCities, getAllPlaces, localized } from "../../data/cities"
import PageMeta from "../../components/PageMeta/PageMeta"
import "./CitiesPage.css"

const pageSize = 24

export default function CitiesPage() {
  const { t, i18n } = useTranslation()
  const [query, setQuery] = useState("")
  const [cityId, setCityId] = useState("")
  const [category, setCategory] = useState("")
  const [visibleCount, setVisibleCount] = useState(pageSize)
  const cities = getAllCities()
  const places = getAllPlaces()
  const language = i18n.language

  const categories = useMemo(
    () => [...new Map(places.map((place) => [place.category.en, localized(place.category, language)])).entries()]
      .sort(([, first], [, second]) => first.localeCompare(second, language)),
    [language, places],
  )

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase(language)

    return places.filter((place) => {
      const city = cities.find((item) => item.id === place.cityId)
      const matchesCity = !cityId || place.cityId === cityId
      const matchesCategory = !category || place.category.en === category
      const searchable = [
        localized(place.name, "en"),
        localized(place.name, "ar"),
        localized(place.summary, "en"),
        localized(place.summary, "ar"),
        localized(city?.name, "en"),
        localized(city?.name, "ar"),
      ].join(" ").toLocaleLowerCase(language)

      return matchesCity && matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery))
    })
  }, [category, cities, cityId, language, places, query])

  const clearFilters = () => {
    setQuery("")
    setCityId("")
    setCategory("")
    setVisibleCount(pageSize)
  }

  return (
    <main className="cities-page">
      <PageMeta title={t("explore.metaTitle")} description={t("explore.metaDescription")} />

      <header className="cp-explore-hero">
        <div className="cp-explore-inner">
          <span className="eyebrow">{t("explore.eyebrow")}</span>
          <h1>{t("explore.title")}</h1>
          <p>{t("explore.subtitle")}</p>
          <div className="cp-stats" aria-label={t("explore.statsLabel")}>
            <span><strong>{cities.length}</strong>{t("explore.cities")}</span>
            <span><strong>{places.length}</strong>{t("explore.destinations")}</span>
            <span><strong>AR / EN</strong>{t("explore.languages")}</span>
          </div>
        </div>
      </header>

      <section className="section cp-city-directory" aria-labelledby="city-directory-title">
        <header className="cp-section-heading">
          <div>
            <span className="eyebrow">{t("explore.cityDirectoryEyebrow")}</span>
            <h2 id="city-directory-title">{t("explore.cityDirectoryTitle")}</h2>
          </div>
          <p>{t("explore.cityDirectoryDescription")}</p>
        </header>
        <div className="cp-city-grid">
          {cities.map((city) => (
            <Link key={city.id} to={`/city/${city.slug}`} className="cp-city-card">
              <img src={city.hero} alt="" loading="lazy" />
              <div className="cp-city-card-shade" />
              <div className="cp-city-card-copy">
                <span>{city.places.length} {t("explore.places")}</span>
                <h3>{localized(city.name, language)}</h3>
                <p>{localized(city.summary, language)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="cp-destination-explorer" aria-labelledby="destination-explorer-title">
        <div className="section">
          <header className="cp-section-heading cp-explorer-heading">
            <div>
              <span className="eyebrow">{t("explore.destinationEyebrow")}</span>
              <h2 id="destination-explorer-title">{t("explore.destinationTitle")}</h2>
            </div>
            <p>{t("explore.destinationDescription")}</p>
          </header>

          <div className="cp-controls" role="search">
            <label className="cp-search">
              <span className="sr-only">{t("explore.searchLabel")}</span>
              <input value={query} onChange={(event) => { setQuery(event.target.value); setVisibleCount(pageSize) }} placeholder={t("explore.searchPlaceholder")} type="search" />
              <span aria-hidden="true">⌕</span>
            </label>
            <label className="cp-select">
              <span>{t("explore.cityFilter")}</span>
              <select value={cityId} onChange={(event) => { setCityId(event.target.value); setVisibleCount(pageSize) }}>
                <option value="">{t("explore.allCities")}</option>
                {cities.map((city) => <option key={city.id} value={city.id}>{localized(city.name, language)}</option>)}
              </select>
            </label>
            <label className="cp-select">
              <span>{t("explore.categoryFilter")}</span>
              <select value={category} onChange={(event) => { setCategory(event.target.value); setVisibleCount(pageSize) }}>
                <option value="">{t("explore.allCategories")}</option>
                {categories.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
              </select>
            </label>
          </div>

          <div className="cp-result-bar" aria-live="polite">
            <p>{t("explore.results", { count: results.length })}</p>
            {(query || cityId || category) && <button type="button" onClick={clearFilters}>{t("explore.clearFilters")}</button>}
          </div>

          {results.length ? (
            <>
              <div className="cp-place-grid">
                {results.slice(0, visibleCount).map((place) => {
                  const city = cities.find((item) => item.id === place.cityId)
                  return (
                    <Link key={place.id} to={`/place/${place.slug}`} className="cp-place-card">
                      <figure><img src={place.image} alt={localized(place.name, language)} loading="lazy" /></figure>
                      <div className="cp-place-copy">
                        <div className="cp-place-meta"><span>{localized(city?.name, language)}</span><span>{localized(place.category, language)}</span></div>
                        <h3>{localized(place.name, language)}</h3>
                        <p>{localized(place.summary, language)}</p>
                        <span className="cp-place-link">{t("explore.viewPlace")} <b>→</b></span>
                      </div>
                    </Link>
                  )
                })}
              </div>
              {visibleCount < results.length && <div className="cp-load-more"><button className="btn-primary" type="button" onClick={() => setVisibleCount((count) => count + pageSize)}>{t("explore.loadMore")}</button></div>}
            </>
          ) : (
            <div className="cp-empty">
              <span>⌕</span><h3>{t("explore.noResultsTitle")}</h3><p>{t("explore.noResultsDescription")}</p>
              <button className="text-link" type="button" onClick={clearFilters}>{t("explore.clearFilters")}</button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
