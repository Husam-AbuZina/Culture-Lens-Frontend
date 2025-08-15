import React, { useState } from "react"
import "./Contact.css"

const initial = { name: "", email: "", subject: "", message: "" }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState({ type: "", msg: "" })
  const [loading, setLoading] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Enter a valid email."
    if (!form.subject.trim()) return "Please add a subject."
    if (!form.message.trim() || form.message.trim().length < 10) return "Message must be at least 10 chars."
    return ""
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const err = validate()
    if (err) return setStatus({ type: "error", msg: err })

    setLoading(true)
    setStatus({ type: "", msg: "" })

    try {
      // 👉 Replace with your API/Email service endpoint if you have one
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error("Request failed")

      setStatus({ type: "ok", msg: "Thanks! We’ll get back to you soon." })
      setForm(initial)
    } catch {
      // ✉️ Fallback: opens your mail client with prefilled body
      const mailto = `mailto:husamzinap@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
        `From: ${form.name} <${form.email}>\n\n${form.message}`
      )}`
      window.location.href = mailto
      setStatus({ type: "ok", msg: "Opening your email app to send the message…" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact">
      {/* Hero */}
      <header className="contact-hero" style={{ backgroundImage: "url(/images/OldTown.jpg)" }}>
        <div className="contact-hero__inner">
          <h1>Contact Us</h1>
          <p>Questions, partnerships, or contributions — we’d love to hear from you.</p>
        </div>
      </header>

      {/* Content */}
      <div className="section contact-grid">
        {/* Form */}
        <form className="contact-form card" onSubmit={onSubmit} noValidate>
          <div className="row">
            <label>
              Name
              <input
                name="name"
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={onChange}
                required
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={onChange}
                required
              />
            </label>
          </div>

          <label>
            Subject
            <input
              name="subject"
              type="text"
              placeholder="How can we help?"
              value={form.subject}
              onChange={onChange}
              required
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows={6}
              placeholder="Tell us a little about your request…"
              value={form.message}
              onChange={onChange}
              required
            />
          </label>

          {status.msg && (
            <div className={`form-status ${status.type === "error" ? "is-error" : "is-ok"}`}>
              {status.msg}
            </div>
          )}

          <button className="btn-primary" type="submit" disabled={loading}>
            {loading ? "Sending…" : "Send Message"}
          </button>

          <p className="tiny">
            By sending, you agree to our <a href="#privacy">Privacy Policy</a>.
          </p>
        </form>

        {/* Info */}
        <aside className="contact-info">
          <div className="card info-card">
            <h3>Reach Us</h3>
            <ul className="list">
              <li><strong>Email:</strong> husamzinap@gmail.com</li>
              <li><strong>Phone:</strong> +970 569683719</li>
              <li><strong>Address:</strong> Hebron, Corner Door, 3rd Floor</li>
            </ul>
          </div>

          <div className="card info-card">
            <h3>Hours</h3>
            <ul className="list">
              <li>Sunday - Thursday: 9:00–18:00</li>
              <li>Saturday: 10:00–14:00</li>
              <li>Friday: Closed</li>
            </ul>
          </div>

          <div className="map card">
            {/* Replace the image with an embedded map if you have coordinates */}
            <img src="/images/placeholder-map.jpg" alt="Map placeholder" />
          </div>
        </aside>
      </div>
    </section>
  )
}
