import { Link, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { getAllPlaces, getPlace, localized } from "../../data/cities"
import PageMeta from "../PageMeta/PageMeta"
import "../CityDetails/CityDetails.css"

export default function PlaceDetails() {
  const { slug } = useParams()
  const { t, i18n } = useTranslation()
  const result = getPlace(slug)

  if (!result) {
    return (
      <main className="empty-page section">
        <PageMeta title={t("notFound.title")} description={t("notFound.text")} />
        <h1>{t("placeDetails.notFound")}</h1>
        <Link className="button-link" to="/cities">{t("cityDetails.backToCities")}</Link>
      </main>
    )
  }

  const { city, gallery } = result
  const title = localized(result.name, i18n.language)
  const description = localized(result.summary, i18n.language)
  const story = localized(result.story, i18n.language)
  const cityName = localized(city.name, i18n.language)
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${result.latitude},${result.longitude}`
  const relatedPlaces = getAllPlaces()
    .filter((place) => place.cityId === city.id && place.id !== result.id)
    .slice(0, 3)

  return (
    <main className="city-details">
      <PageMeta title={title} description={description} image={result.image} />
      <header className="cd-hero" style={{ backgroundImage: `url(${result.image})` }}>
        <div className="hero-overlay" />
        <div className="cd-hero-inner">
          <span className="eyebrow">{cityName} · {localized(result.category, i18n.language)}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="cd-hero-actions">
            <Link className="button-link" to={`/city/${city.slug}`}>{t("placeDetails.viewCity", { city: cityName })}</Link>
            <a className="cd-map-link" href={mapUrl} target="_blank" rel="noreferrer">{t("placeDetails.openMap")} ↗</a>
          </div>
        </div>
      </header>

      <section className="section content-section">
        <div><span className="eyebrow">{localized(result.category, i18n.language)}</span><h2>{t("placeDetails.about")}</h2></div>
        <div>
          <p className="lead">{story}</p>
          <div className="city-facts">
            <span><strong>{cityName}</strong>{t("placeDetails.cityLabel")}</span>
            <a href={mapUrl} target="_blank" rel="noreferrer">{result.latitude.toFixed(4)}, {result.longitude.toFixed(4)} ↗</a>
          </div>
        </div>
      </section>

      <section className="section cd-gallery" aria-label={t("placeDetails.gallery")}>
        {gallery.map((src, index) => (
          <figure className="cd-shot" key={src}>
            <img src={src} alt={`${title} ${index + 1}`} loading="lazy" />
          </figure>
        ))}
      </section>

      {relatedPlaces.length > 0 && (
        <section className="section related-places">
          <header><span className="eyebrow">{cityName}</span><h2>{t("placeDetails.relatedTitle")}</h2></header>
          <div className="related-grid">
            {relatedPlaces.map((place) => (
              <Link key={place.id} to={`/place/${place.slug}`} className="related-card">
                <img src={place.image} alt={localized(place.name, i18n.language)} loading="lazy" />
                <div><span>{localized(place.category, i18n.language)}</span><h3>{localized(place.name, i18n.language)}</h3></div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="section cd-back">
        <Link className="back-btn" to={`/city/${city.slug}`}>
          {t("placeDetails.backToCity", { city: cityName })}
        </Link>
      </div>
    </main>
  )
}
