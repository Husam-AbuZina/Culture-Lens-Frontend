import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { getAllCities, localized } from "../../data/cities"
import "./Cities.css"

export default function Cities() {
  const { t, i18n } = useTranslation()
  const cities = getAllCities().slice(0, 3)

  return (
    <section id="cities" className="cities-section">
      <header className="cities-heading">
        <div>
          <span className="eyebrow">{t("cities.eyebrow")}</span>
          <h2>{t("cities.title")}</h2>
        </div>
        <div className="cities-intro">
          <p>{t("cities.sub")}</p>
          <Link className="text-link" to="/cities">{t("cities.viewAll")} ↗</Link>
        </div>
      </header>

      <div className="cities-editorial-grid">
        {cities.map((city, index) => (
          <Link to={`/city/${city.slug}`} className={`city-feature city-feature-${index + 1}`} key={city.slug}>
            <figure>
              <img src={city.hero} alt={localized(city.name, i18n.language)} loading="lazy" />
              <span className="city-coordinate">
                {index === 0 ? "31.5326° N" : index === 1 ? "31.7054° N" : "31.7683° N"}
              </span>
            </figure>
            <div className="city-feature-copy">
              <span className="city-index">0{index + 1}</span>
              <div>
                <h3>{localized(city.name, i18n.language)}</h3>
                <p>{localized(city.summary, i18n.language)}</p>
              </div>
              <span className="city-open">↗</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
