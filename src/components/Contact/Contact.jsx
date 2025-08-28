import React, { useState } from "react"
import "./Contact.css"
import { useTranslation } from "react-i18next"

const initial = { name: "", email: "", subject: "", message: "" }

export default function Contact() {
  const { t } = useTranslation()
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState({ type: "", msg: "" })
  const [loading, setLoading] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const validate = () => {
    if (!form.name.trim()) return t("contact.errors.name")
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return t("contact.errors.email")
    if (!form.subject.trim()) return t("contact.errors.subject")
    if (!form.message.trim() || form.message.trim().length < 10) return t("contact.errors.message")
    return ""
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const err = validate()
    if (err) return setStatus({ type: "error", msg: err })

    setLoading(true)
    setStatus({ type: "", msg: "" })

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error("Request failed")

      setStatus({ type: "ok", msg: t("contact.status.ok") })
      setForm(initial)
    } catch {
      const mailto = `mailto:husamzinap@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
        `${t("contact.mail.from")}: ${form.name} <${form.email}>\n\n${form.message}`
      )}`
      window.location.href = mailto
      setStatus({ type: "ok", msg: t("contact.status.fallback") })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact">
      {/* Hero */}
      <header className="contact-hero" style={{ backgroundImage: "url(/images/OldTown.jpg)" }}>
        <div className="contact-hero__inner">
          <h1>{t("contact.hero.title")}</h1>
          <p>{t("contact.hero.sub")}</p>
        </div>
      </header>

      {/* Content */}
      <div className="section contact-grid">
        {/* Form */}
        <form className="contact-form card" onSubmit={onSubmit} noValidate>
          <div className="row">
            <label>
              {t("contact.form.name")}
              <input
                name="name"
                type="text"
                placeholder={t("contact.form.namePh")}
                value={form.name}
                onChange={onChange}
                required
                aria-label={t("contact.form.name")}
              />
            </label>
            <label>
              {t("contact.form.email")}
              <input
                name="email"
                type="email"
                placeholder={t("contact.form.emailPh")}
                value={form.email}
                onChange={onChange}
                required
                aria-label={t("contact.form.email")}
              />
            </label>
          </div>

          <label>
            {t("contact.form.subject")}
            <input
              name="subject"
              type="text"
              placeholder={t("contact.form.subjectPh")}
              value={form.subject}
              onChange={onChange}
              required
              aria-label={t("contact.form.subject")}
            />
          </label>

          <label>
            {t("contact.form.message")}
            <textarea
              name="message"
              rows={6}
              placeholder={t("contact.form.messagePh")}
              value={form.message}
              onChange={onChange}
              required
              aria-label={t("contact.form.message")}
            />
          </label>

          {status.msg && (
            <div className={`form-status ${status.type === "error" ? "is-error" : "is-ok"}`}>
              {status.msg}
            </div>
          )}

          <button className="btn-primary" type="submit" disabled={loading}>
            {loading ? t("contact.form.sending") : t("contact.form.send")}
          </button>

          <p className="tiny">
            {t("contact.form.disclaimer")} <a href="#privacy">{t("contact.form.privacy")}</a>.
          </p>
        </form>

        {/* Info */}
        <aside className="contact-info">
          <div className="card info-card">
            <h3>{t("contact.info.reach")}</h3>
            <ul className="list">
              <li><strong>{t("contact.info.email")}:</strong> husamzinap@gmail.com</li>
              <li><strong>{t("contact.info.phone")}:</strong> +970 569683719</li>
              <li><strong>{t("contact.info.address")}:</strong> {t("contact.info.addressVal")}</li>
            </ul>
          </div>

          <div className="card info-card">
            <h3>{t("contact.info.hours")}</h3>
            <ul className="list">
              <li>{t("contact.info.sunThu")}: 9:00–18:00</li>
              <li>{t("contact.info.sat")}: 10:00–14:00</li>
              <li>{t("contact.info.fri")}: {t("contact.info.closed")}</li>
            </ul>
          </div>

          <div className="map card">
            <img src="/images/placeholder-map.jpg" alt={t("contact.info.mapAlt")} />
          </div>
        </aside>
      </div>
    </section>
  )
}
