import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { getCity, localized } from "../../data/cities"
import PageMeta from "../PageMeta/PageMeta"
import "./CityDetails.css"

export default function CityDetails() {
  const { slug } = useParams()
  const { t, i18n } = useTranslation()
  const city = getCity(slug)
  const [visibleCount, setVisibleCount] = useState(24)

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

  const cityName = localized(city.name, i18n.language)
  const citySummary = localized(city.summary, i18n.language)
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${city.latitude},${city.longitude}`

  return (
    <main className="city-details">
      <PageMeta title={cityName} description={citySummary} image={city.hero} />
      <header className="cd-hero" style={{ backgroundImage: `url(${city.hero})` }}>
        <div className="hero-overlay" />
        <div className="cd-hero-inner">
          <span className="eyebrow">{t("cityDetails.eyebrow")}</span>
          <h1>{cityName}</h1>
          <p>{citySummary}</p>
          <div className="cd-hero-actions">
            <Link className="button-link" to="/cities">{t("cityDetails.browseOther")}</Link>
            <a className="cd-map-link" href={mapUrl} target="_blank" rel="noreferrer">{t("city.openMap")} ↗</a>
          </div>
        </div>
      </header>

      <section className="section city-overview">
        <div>
          <span className="eyebrow">{t("city.overviewEyebrow")}</span>
          <h2>{t("city.overviewTitle", { city: cityName })}</h2>
        </div>
        <div>
          <p className="lead">{localized(city.description, i18n.language)}</p>
          <div className="city-facts">
            <span><strong>{city.places.length}</strong>{t("city.destinations")}</span>
            <a href={mapUrl} target="_blank" rel="noreferrer">{city.latitude.toFixed(4)}, {city.longitude.toFixed(4)} ↗</a>
          </div>
        </div>
      </section>

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
          {city.places.slice(0, visibleCount).map((place) => {
            const title = localized(place.name, i18n.language)
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
                  <p>{localized(place.summary, i18n.language)}</p>
                  <span className="cd-more">{t("place.viewDetails")} →</span>
                </div>
              </Link>
            )
          })}
        </div>
        {visibleCount < city.places.length && (
          <div className="city-load-more">
            <button className="btn-primary" type="button" onClick={() => setVisibleCount((count) => count + 24)}>{t("city.loadMore")}</button>
          </div>
        )}
      </section>

      <div className="section cd-back">
        <Link className="back-btn" to="/cities">{t("cityDetails.backToCities")}</Link>
      </div>
    </main>
  )
}
