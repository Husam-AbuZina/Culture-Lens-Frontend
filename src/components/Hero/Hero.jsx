import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import PageMeta from "../PageMeta/PageMeta"
import { getAllCities } from "../../data/cities"
import "./Hero.css"

export default function Hero() {
  const { t } = useTranslation()
  const cities = getAllCities()

  return (
    <section className="hero-wrap">
      <PageMeta description={t("hero.sub")} />

      <div className="hero-cover">
        <div className="hero-image" role="img" aria-label={t("hero.bgAria")}>
          <div className="hero-image-shade" />
          <div className="hero-image-meta">
            <span>31.7683° N</span>
            <span>35.2137° E</span>
          </div>
        </div>

        <div className="hero-editorial">
          <span className="hero-edition">Culture Lens / 001</span>
          <div className="hero-copy">
            <span className="eyebrow">{t("hero.kicker")}</span>
            <h1>{t("hero.title")}</h1>
            <p>{t("hero.sub")}</p>
            <div className="hero-actions">
              <a className="button-link" href="#cities">{t("hero.cta")}</a>
              <Link className="text-link" to="/about">{t("hero.learnMore")} ↗</Link>
            </div>
          </div>
          <div className="hero-footnote">
            <span>AR / EN</span>
            <span>Places · Memory · Culture</span>
          </div>
        </div>
      </div>

      <nav className="atlas-index" aria-label={t("cities.title")}>
        <div className="atlas-index-title">
          <span className="atlas-cross">✦</span>
          <span>{t("cities.eyebrow")}</span>
        </div>
        {cities.map((city, index) => (
          <Link to={`/city/${city.slug}`} className="atlas-city" key={city.slug}>
            <span className="atlas-number">0{index + 1}</span>
            <span>{t(`cities.${city.slug}.name`)}</span>
            <span className="atlas-arrow">↗</span>
          </Link>
        ))}
      </nav>
    </section>
  )
}
