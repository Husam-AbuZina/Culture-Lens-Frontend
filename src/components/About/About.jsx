import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import PageMeta from "../PageMeta/PageMeta"
import "./About.css"

export default function About() {
  const { t } = useTranslation()
  const values = t("about.values.items", { returnObjects: true })
  const milestones = t("about.timeline.items", { returnObjects: true })

  return (
    <main className="about">
      <PageMeta title={t("about.hero.title")} description={t("about.hero.sub")} />
      <header className="about-hero" style={{ backgroundImage: "url(/images/OldTown.jpg)" }}>
        <div className="hero-overlay" />
        <div className="about-hero__inner">
          <span className="eyebrow">{t("about.hero.eyebrow")}</span>
          <h1>{t("about.hero.title")}</h1>
          <p>{t("about.hero.sub")}</p>
          <Link className="button-link" to="/cities">{t("about.hero.cta")}</Link>
        </div>
      </header>

      <section className="section about-mission">
        <div>
          <span className="eyebrow">{t("about.mission.eyebrow")}</span>
          <h2>{t("about.mission.title")}</h2>
        </div>
        <p className="lead">{t("about.mission.lead")}</p>
      </section>

      <section className="section">
        <div className="section-heading align-start">
          <span className="eyebrow">{t("about.values.eyebrow")}</span>
          <h2>{t("about.values.title")}</h2>
        </div>
        <div className="about-values">
          {values.map((value, index) => (
            <article className="value card" key={value.title}>
              <span className="value-number">0{index + 1}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading align-start">
          <span className="eyebrow">{t("about.timeline.eyebrow")}</span>
          <h2>{t("about.timeline.title")}</h2>
        </div>
        <div className="about-timeline">
          {milestones.map((item) => (
            <article className="t-item" key={item.year}>
              <div className="t-year">{item.year}</div>
              <div className="t-card card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-end">
        <h2>{t("about.end.title")}</h2>
        <p>{t("about.end.sub")}</p>
        <Link className="button-link" to="/contact">{t("about.end.cta")}</Link>
      </section>
    </main>
  )
}
