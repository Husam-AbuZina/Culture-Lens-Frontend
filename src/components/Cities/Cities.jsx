import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { getAllCities } from "../../data/cities"
import "./Cities.css"

export default function Cities() {
  const { t } = useTranslation()

  return (
    <section id="cities" className="cities-section">
      <div className="section-heading">
        <span className="eyebrow">{t("cities.eyebrow")}</span>
        <h2>{t("cities.title")}</h2>
        <p>{t("cities.sub")}</p>
      </div>

      <div className="cities-grid">
        {getAllCities().map((city) => (
          <Link to={`/city/${city.slug}`} className="city-card" key={city.slug}>
            <figure className="city-figure">
              <img src={city.hero} alt={t(`cities.${city.slug}.name`)} loading="lazy" />
            </figure>
            <div className="city-card-copy">
              <h3>{t(`cities.${city.slug}.name`)}</h3>
              <span>{t("cities.explore")} →</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="section-action">
        <Link className="text-link" to="/cities">{t("cities.viewAll")} →</Link>
      </div>
    </section>
  )
}
