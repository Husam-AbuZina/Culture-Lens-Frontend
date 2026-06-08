import { useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import PageMeta from "../PageMeta/PageMeta"
import "./Contact.css"

const initial = { name: "", email: "", subject: "", message: "" }

export default function Contact() {
  const { t } = useTranslation()
  const [form, setForm] = useState(initial)
  const [error, setError] = useState("")

  const onChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
    setError("")
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (!form.name.trim()) return setError(t("contact.errors.name"))
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return setError(t("contact.errors.email"))
    if (!form.subject.trim()) return setError(t("contact.errors.subject"))
    if (form.message.trim().length < 10) return setError(t("contact.errors.message"))

    const body = `${t("contact.mail.from")}: ${form.name} <${form.email}>\n\n${form.message}`
    window.location.href = `mailto:husamzinap@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <main className="contact">
      <PageMeta title={t("contact.hero.title")} description={t("contact.hero.sub")} />
      <header className="contact-hero" style={{ backgroundImage: "url(/images/OldTown.jpg)" }}>
        <div className="hero-overlay" />
        <div className="contact-hero__inner">
          <span className="eyebrow">{t("contact.hero.eyebrow")}</span>
          <h1>{t("contact.hero.title")}</h1>
          <p>{t("contact.hero.sub")}</p>
        </div>
      </header>

      <div className="section contact-grid">
        <form className="contact-form card" onSubmit={onSubmit} noValidate>
          <div className="row">
            <label>
              {t("contact.form.name")}
              <input name="name" value={form.name} onChange={onChange} autoComplete="name" />
            </label>
            <label>
              {t("contact.form.email")}
              <input name="email" type="email" value={form.email} onChange={onChange} autoComplete="email" />
            </label>
          </div>
          <label>
            {t("contact.form.subject")}
            <input name="subject" value={form.subject} onChange={onChange} />
          </label>
          <label>
            {t("contact.form.message")}
            <textarea name="message" rows={7} value={form.message} onChange={onChange} />
          </label>
          {error && <div className="form-status is-error" role="alert">{error}</div>}
          <button className="btn-primary" type="submit">{t("contact.form.send")}</button>
          <p className="tiny">
            {t("contact.form.disclaimer")} <Link to="/privacy">{t("contact.form.privacy")}</Link>.
          </p>
        </form>

        <aside className="contact-info">
          <div className="card info-card">
            <h2>{t("contact.info.reach")}</h2>
            <ul className="list">
              <li><strong>{t("contact.info.email")}:</strong> <a href="mailto:husamzinap@gmail.com">husamzinap@gmail.com</a></li>
              <li><strong>{t("contact.info.phone")}:</strong> <a href="tel:+970569683719">+970 569 683 719</a></li>
              <li><strong>{t("contact.info.address")}:</strong> {t("contact.info.addressVal")}</li>
            </ul>
          </div>
          <div className="map card">
            <img src="/images/placeholder-map.jpg" alt={t("contact.info.mapAlt")} />
            <div className="map-caption">{t("contact.info.mapCaption")}</div>
          </div>
        </aside>
      </div>
    </main>
  )
}
