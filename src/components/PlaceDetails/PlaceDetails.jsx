import { Link, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { getPlace } from "../../data/cities"
import PageMeta from "../PageMeta/PageMeta"
import "../CityDetails/CityDetails.css"

export default function PlaceDetails() {
  const { slug } = useParams()
  const { t } = useTranslation()
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
  const title = t(`places.${slug}.name`)
  const description = t(`places.${slug}.description`)

  return (
    <main className="city-details">
      <PageMeta title={title} description={description} />
      <header className="cd-hero" style={{ backgroundImage: `url(${result.image})` }}>
        <div className="hero-overlay" />
        <div className="cd-hero-inner">
          <span className="eyebrow">{t(`cities.${city.slug}.name`)}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </header>

      <section className="section content-section">
        <h2>{t("placeDetails.about")}</h2>
        <p className="lead">{t(`places.${slug}.longDescription`)}</p>
      </section>

      <section className="section cd-gallery" aria-label={t("placeDetails.gallery")}>
        {gallery.map((src, index) => (
          <figure className="cd-shot" key={src}>
            <img src={src} alt={`${title} ${index + 1}`} loading="lazy" />
          </figure>
        ))}
      </section>

      <div className="section cd-back">
        <Link className="back-btn" to={`/city/${city.slug}`}>
          {t("placeDetails.backToCity", { city: t(`cities.${city.slug}.name`) })}
        </Link>
      </div>
    </main>
  )
}
