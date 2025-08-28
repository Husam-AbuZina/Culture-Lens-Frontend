import React from 'react'
import './Navbar.css';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith("ar") ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <header className="navbar cl-nav">
      <div className="section cl-wrap">
        {/* LEFT: Logo */}
        <a href="/" className="cl-brand" aria-label={t("siteName")}>
          <span className="cl-logo" aria-hidden>
            {/* magnifying glass */}
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
              <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="cl-name">{t("siteName")}</span>
        </a>

        {/* CENTER: Nav links */}
        <nav className="cl-center" aria-label="Primary">
          <a href="/" className="cl-link">{t("nav.home")}</a>
          <a href="/cities" className="cl-link">{t("nav.cities")}</a>
          <a href="/about" className="cl-link">{t("nav.about")}</a>
          <a href="/contact" className="cl-link">{t("nav.contact")}</a>
        </nav>

        {/* RIGHT: Icons */}
        <div className="cl-right" aria-label="Quick actions">
          {/* 🌐 Language toggle */}
          <button className="icon-btn" aria-label="Toggle Language" onClick={toggleLanguage}>
            {i18n.language.startsWith("ar") ? "EN" : "ع"}
          </button>

          <button className="icon-btn" aria-label="Account">
            {/* user */}
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
              <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M4 20a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="icon-btn" aria-label="Search">
            {/* search */}
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
              <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="icon-btn" aria-label="Favorites">
            {/* heart */}
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.35l8.84-8.96a5.5 5.5 0 0 0 0-7.78Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="icon-btn" aria-label="Cart">
            {/* cart */}
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
              <path d="M6 6h15l-1.5 9H8L6 3H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="9.5" cy="20" r="1.5" stroke="currentColor" strokeWidth="2"/>
              <circle cx="18" cy="20" r="1.5" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </div>

        {/* MOBILE: hamburger (optional) */}
        <button className="cl-burger" aria-label="Open menu">
          <span/><span/><span/>
        </button>
      </div>
    </header>
  )
}
