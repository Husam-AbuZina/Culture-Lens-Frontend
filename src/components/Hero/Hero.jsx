import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import PageMeta from "../PageMeta/PageMeta"
import "./Hero.css"

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero-wrap">
      <PageMeta description={t("hero.sub")} />
      <div className="hero-bg" role="img" aria-label={t("hero.bgAria")} />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-card">
          <span className="eyebrow">{t("hero.kicker")}</span>
          <h1>{t("hero.title")}</h1>
          <p>{t("hero.sub")}</p>
          <div className="hero-actions">
            <a className="button-link" href="#cities">{t("hero.cta")}</a>
            <Link className="text-link" to="/about">{t("hero.learnMore")} →</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
