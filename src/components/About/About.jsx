import React from "react"
import { Link } from "react-router-dom"
import "./About.css"
import { useTranslation } from "react-i18next"

export default function About() {
  const { t } = useTranslation()

  const stats = [
    { label: t("about.stats.sites"),  value: "10+" },
    { label: t("about.stats.cities"), value: "10" },
    { label: t("about.stats.photos"), value: "5k+" },
    { label: t("about.stats.years"),  value: "7" }
  ]

  const values = [
    { title: t("about.values.items.auth.title"), desc: t("about.values.items.auth.desc") },
    { title: t("about.values.items.resp.title"), desc: t("about.values.items.resp.desc") },
    { title: t("about.values.items.access.title"), desc: t("about.values.items.access.desc") },
    { title: t("about.values.items.community.title"), desc: t("about.values.items.community.desc") }
  ]

  const team = [
    { name: "Husam", role: t("about.team.roles.ceo"),   img: "/images/team1.jpg" },
    { name: "Lina",  role: t("about.team.roles.content"), img: "/images/team2.jpg" },
    { name: "Omar",  role: t("about.team.roles.engineer"), img: "/images/team3.jpg" },
    { name: "Maya",  role: t("about.team.roles.designer"), img: "/images/team4.jpg" }
  ]

  const timeline = [
    { year: "2018", title: t("about.timeline.items.idea.title"),  desc: t("about.timeline.items.idea.desc") },
    { year: "2020", title: t("about.timeline.items.beta.title"),  desc: t("about.timeline.items.beta.desc") },
    { year: "2023", title: t("about.timeline.items.comm.title"),  desc: t("about.timeline.items.comm.desc") },
    { year: "2025", title: t("about.timeline.items.launch.title"),desc: t("about.timeline.items.launch.desc") }
  ]

  return (
    <section className="about">
      {/* HERO */}
      <header className="about-hero" style={{ backgroundImage: "url(/images/OldTown.jpg)" }}>
        <div className="about-hero__inner">
          <h1>{t("about.hero.title")}</h1>
          <p>{t("about.hero.sub")}</p>
          <Link className="about-cta" to="/#cities">{t("about.hero.cta")}</Link>
        </div>
      </header>

      {/* MISSION */}
      <div className="section">
        <h2>🎯 {t("about.mission.title")}</h2>
        <p className="lead">{t("about.mission.lead")}</p>
        <div className="about-stats">
          {stats.map((s, i) => (
            <div key={i} className="stat card">
              <div className="val">{s.value}</div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* VALUES */}
      <div className="section">
        <h2>🧭 {t("about.values.title")}</h2>
        <div className="about-values">
          {values.map((v, i) => (
            <article key={i} className="value card">
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </article>
          ))}
        </div>
      </div>

      {/* TEAM */}
      <div className="section">
        <h2>👥 {t("about.team.title")}</h2>
        <div className="about-team">
          {team.map((m, i) => (
            <article className="member card" key={i}>
              <figure className="avatar">
                <img
                  src={m.img}
                  alt={m.name}
                  onError={(e)=>{ e.currentTarget.src = "/images/placeholder.jpg" }}
                  loading="lazy"
                />
              </figure>
              <div className="meta">
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* TIMELINE */}
      <div className="section">
        <h2>🗓️ {t("about.timeline.title")}</h2>
        <div className="about-timeline">
          {timeline.map((tItem, i) => (
            <div className="t-item" key={i}>
              <div className="t-year">{tItem.year}</div>
              <div className="t-card card">
                <h3>{tItem.title}</h3>
                <p>{tItem.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="section about-end">
        <h2>📬 {t("about.end.title")}</h2>
        <p>{t("about.end.sub")}</p>
        <Link className="about-cta ghost" to="/#contact">{t("about.end.cta")}</Link>
      </div>
    </section>
  )
}
