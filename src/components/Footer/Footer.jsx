import React from 'react'
import './Footer.css'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="cl-footer">
      <div className="cl-footer-grid">
        {/* Brand + Address */}
        <div className="col brand">
          <h3 className="logo">{t("footer.brand")}<span className="dot">.</span></h3>
          <address className="addr">
            {t("footer.address")}<br/>
          </address>
        </div>

        {/* Links */}
        <nav className="col">
          <h4>{t("footer.links.title")}</h4>
          <ul>
            <li><a href="#home">{t("nav.home")}</a></li>
            <li><a href="#cities">{t("nav.cities")}</a></li>
            <li><a href="#about">{t("nav.about")}</a></li>
            <li><a href="#contact">{t("nav.contact")}</a></li>
          </ul>
        </nav>

        {/* Help */}
        <nav className="col">
          <h4>{t("footer.help.title")}</h4>
          <ul>
            <li><a href="#payment">{t("footer.help.payment")}</a></li>
            <li><a href="#returns">{t("footer.help.returns")}</a></li>
            <li><a href="#privacy">{t("footer.help.privacy")}</a></li>
          </ul>
        </nav>

        {/* Newsletter */}
        <div className="col newsletter">
          <h4>{t("footer.newsletter.title")}</h4>
          <form
            className="inline-form"
            onSubmit={(e)=>{e.preventDefault(); alert(t("footer.newsletter.subscribed"))}}
          >
            <input
              type="email"
              placeholder={t("footer.newsletter.placeholder")}
              aria-label={t("footer.newsletter.aria")}
              required
            />
            <button type="submit" className="underline-btn">{t("footer.newsletter.button")}</button>
          </form>
        </div>
      </div>

      <hr className="divider" />

      <div className="fineprint">© {year} {t("siteName")}. {t("footer.rights")}</div>
    </footer>
  )
}
