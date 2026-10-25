import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import "./Footer.css"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="cl-footer">
      <div className="cl-footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src="/culture-lens-logo.svg" alt="" />
            <span>{t("siteName")}</span>
          </Link>
          <p>{t("footer.tagline")}</p>
        </div>

        <nav className="footer-column" aria-label={t("footer.explore")}>
          <h2>{t("footer.explore")}</h2>
          <Link to="/">{t("nav.home")}</Link>
          <Link to="/cities">{t("nav.cities")}</Link>
          <Link to="/about">{t("nav.about")}</Link>
          <Link to="/contact">{t("nav.contact")}</Link>
        </nav>

        <nav className="footer-column" aria-label={t("footer.information")}>
          <h2>{t("footer.information")}</h2>
          <Link to="/privacy">{t("footer.privacy")}</Link>
          <Link to="/terms">{t("footer.terms")}</Link>
          <a href="mailto:husamzinap@gmail.com">husamzinap@gmail.com</a>
        </nav>
      </div>
      <div className="fineprint">
        © {new Date().getFullYear()} {t("siteName")}. {t("footer.rights")}
      </div>
    </footer>
  )
}
