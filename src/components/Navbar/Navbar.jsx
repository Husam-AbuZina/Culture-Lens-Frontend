import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import "./Navbar.css"

const links = [
  { to: "/", key: "home" },
  { to: "/cities", key: "cities" },
  { to: "/about", key: "about" },
  { to: "/contact", key: "contact" },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)

  const toggleLanguage = async () => {
    const language = i18n.resolvedLanguage?.startsWith("ar") ? "en" : "ar"
    await i18n.changeLanguage(language)
    document.documentElement.lang = language
    document.documentElement.dir = i18n.dir(language)
  }

  return (
    <header className="cl-nav">
      <div className="cl-wrap">
        <NavLink to="/" className="cl-brand" aria-label={t("siteName")}>
          <img src="/culture-lens-logo.svg" alt="" className="cl-logo" />
          <span className="cl-name">{t("siteName")}</span>
        </NavLink>

        <nav className={`cl-center ${open ? "is-open" : ""}`} aria-label={t("nav.primary")}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `cl-link ${isActive ? "is-active" : ""}`}
            >
              {t(`nav.${link.key}`)}
            </NavLink>
          ))}
        </nav>

        <div className="cl-actions">
          <button className="language-btn" onClick={toggleLanguage} aria-label={t("common.changeLanguage")}>
            {i18n.resolvedLanguage?.startsWith("ar") ? "EN" : "عربي"}
          </button>
          <button
            className={`cl-burger ${open ? "is-open" : ""}`}
            type="button"
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
