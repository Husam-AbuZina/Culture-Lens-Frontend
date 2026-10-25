import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { getAllCities, localized } from "../../data/cities"
import "./Cities.css"

export default function Cities() {
  const { t, i18n } = useTranslation()
  const cities = getAllCities()

  return (
    <section id="choose-a-city" className="city-chooser" aria-labelledby="choose-city-title">
      <header className="city-chooser-heading">
        <div>
          <span className="eyebrow">{t("homeCities.eyebrow")}</span>
          <h2 id="choose-city-title">{t("homeCities.title")}</h2>
        </div>
        <div>
          <p>{t("homeCities.description")}</p>
          <Link className="text-link" to="/cities#explore-destinations">{t("homeCities.exploreAll")} ↗</Link>
        </div>
      </header>

      <div className="city-chooser-grid">
        {cities.map((city, index) => (
          <Link key={city.id} to={`/city/${city.slug}`} className="city-chooser-card">
            <img src={city.hero} alt="" loading={index < 4 ? "eager" : "lazy"} />
            <div className="city-chooser-overlay" />
            <div className="city-chooser-copy">
              <span className="city-chooser-count">{city.places.length} {t("homeCities.places")}</span>
              <h3>{localized(city.name, i18n.language)}</h3>
              <span className="city-chooser-action">{t("homeCities.openGuide")} <b>→</b></span>
            </div>
            <span className="city-chooser-focus-title" aria-hidden="true">{localized(city.name, i18n.language)}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
