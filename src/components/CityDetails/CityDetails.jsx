import { Link, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { getCity } from "../../data/cities"
import PageMeta from "../PageMeta/PageMeta"
import "./CityDetails.css"

export default function CityDetails() {
  const { slug } = useParams()
  const { t } = useTranslation()
  const city = getCity(slug)

  if (!city) {
    return (
      <main className="empty-page section">
        <PageMeta title={t("cityDetails.notFound.title")} description={t("cityDetails.notFound.hint")} />
        <h1>{t("cityDetails.notFound.title")}</h1>
        <p>{t("cityDetails.notFound.hint")}</p>
        <Link className="button-link" to="/cities">{t("cityDetails.backToCities")}</Link>
      </main>
    )
  }

  const cityName = t(`cities.${city.slug}.name`)
  const citySummary = t(`cities.${city.slug}.summary`)

  return (
    <main className="city-details">
      <PageMeta title={cityName} description={citySummary} />
      <header className="cd-hero" style={{ backgroundImage: `url(${city.hero})` }}>
        <div className="hero-overlay" />
        <div className="cd-hero-inner">
          <span className="eyebrow">{t("cityDetails.eyebrow")}</span>
          <h1>{cityName}</h1>
          <p>{citySummary}</p>
          <Link className="button-link" to="/cities">{t("cityDetails.browseOther")}</Link>
        </div>
      </header>

      <section className="section cd-gallery" aria-label={t("city.photos")}>
        {city.gallery.map((src, index) => (
          <figure className="cd-shot" key={src}>
            <img src={src} alt={`${cityName} ${index + 1}`} loading="lazy" />
          </figure>
        ))}
      </section>

      <section className="section">
        <h2 className="cd-h2">{t("city.heritagePlaces")}</h2>
        <div className="cd-grid">
          {city.places.map((place) => {
            const title = t(`places.${place.slug}.name`)
            return (
              <Link
                key={place.slug}
                to={`/place/${place.slug}`}
                className="cd-card"
                aria-label={t("cities.open", { name: title })}
              >
                <figure className="cd-media">
                  <img src={place.image} alt={title} loading="lazy" />
                </figure>
                <div className="cd-info">
                  <h3>{title}</h3>
                  <p>{t(`places.${place.slug}.description`)}</p>
                  <span className="cd-more">{t("place.viewDetails")} →</span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <div className="section cd-back">
        <Link className="back-btn" to="/cities">{t("cityDetails.backToCities")}</Link>
      </div>
    </main>
  )
}
