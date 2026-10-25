import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import PageMeta from "../PageMeta/PageMeta"
import "./Hero.css"

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero-wrap">
      <PageMeta description={t("hero.sub")} />

      <div className="hero-cover">
        <div className="hero-image" role="img" aria-label={t("hero.bgAria")}>
          <div className="hero-image-shade" />
          <div className="hero-image-meta"><span>31.7683° N</span><span>35.2137° E</span></div>
        </div>

        <div className="hero-editorial">
          <span className="hero-edition">Culture Lens / 001</span>
          <div className="hero-copy">
            <span className="eyebrow">{t("hero.kicker")}</span>
            <h1>{t("hero.title")}</h1>
            <p>{t("hero.sub")}</p>
            <div className="hero-actions">
              <Link className="button-link hero-primary-cta" to="/cities#explore-destinations">{t("hero.cta")}</Link>
              <a className="text-link" href="#choose-a-city">{t("hero.discoverCities")} ↓</a>
            </div>
            <p className="hero-trust">{t("hero.trust")}</p>
          </div>
          <div className="hero-footnote"><span>AR / EN</span><span>Places · Memory · Culture</span></div>
        </div>
      </div>
    </section>
  )
}
