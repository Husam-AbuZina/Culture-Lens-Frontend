import React from "react"
import { Link } from "react-router-dom"
import "./About.css"

export default function About() {
  const stats = [
    { label: "Heritage Sites", value: "20+" },
    { label: "Cities Covered", value: "10" },
    { label: "Photos Curated", value: "5k+" },
    { label: "Years Preserving", value: "7" },
  ]

  const values = [
    { title: "Authenticity", desc: "We keep stories accurate—voices of locals first." },
    { title: "Respect", desc: "Culture comes before clicks. Always." },
    { title: "Access", desc: "Free, simple, multilingual exploration." },
    { title: "Community", desc: "Crowdsourced photos & notes, carefully reviewed." },
  ]

  const team = [
    { name: "Husam", role: "Founder & CEO", img: "/images/team1.jpg" },
    { name: "Lina", role: "Content Lead",   img: "/images/team2.jpg" },
    { name: "Omar", role: "Engineer",       img: "/images/team3.jpg" },
    { name: "Maya", role: "Designer",       img: "/images/team4.jpg" },
  ]

  const timeline = [
    { year: "2018", title: "The Idea", desc: "Started documenting hidden heritage spots." },
    { year: "2020", title: "Beta",     desc: "First map of cities & places published." },
    { year: "2023", title: "Community",desc: "Opened submissions & verification." },
    { year: "2025", title: "Culture Lens", desc: "Launched the full platform." },
  ]

  return (
    <section className="about">
      {/* HERO */}
      <header className="about-hero" style={{ backgroundImage: "url(/images/OldTown.jpg)" }}>
        <div className="about-hero__inner">
          <h1>About Culture Lens</h1>
          <p>We help you discover Palestine’s heritage—clearly, respectfully, and beautifully.</p>
          <Link className="about-cta" to="/#cities">Browse Cities</Link>
        </div>
      </header>

      {/* MISSION */}
      <div className="section">
        <h2>🎯 Our Mission</h2>
        <p className="lead">
          Preserve, organize, and share cultural heritage through an accessible visual archive.
          We work with locals, historians, and travelers to keep every detail trustworthy.
        </p>

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
        <h2>🧭 Our Values</h2>
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
        <h2>👥 Team</h2>
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
        <h2>🗓️ Timeline</h2>
        <div className="about-timeline">
          {timeline.map((t, i) => (
            <div className="t-item" key={i}>
              <div className="t-year">{t.year}</div>
              <div className="t-card card">
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="section about-end">
        <h2>📬 Contribute or Collaborate</h2>
        <p>Have photos or stories to share? Help us enrich the archive.</p>
        <Link className="about-cta ghost" to="/#contact">Get in Touch</Link>
      </div>
    </section>
  )
}
