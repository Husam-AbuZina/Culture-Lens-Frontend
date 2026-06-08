import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import PageMeta from "../../components/PageMeta/PageMeta"

export default function NotFound() {
  const { t } = useTranslation()
  return (
    <main className="empty-page section">
      <PageMeta title={t("notFound.title")} description={t("notFound.text")} />
      <span className="eyebrow">404</span>
      <h1>{t("notFound.title")}</h1>
      <p>{t("notFound.text")}</p>
      <Link className="button-link" to="/">{t("notFound.home")}</Link>
    </main>
  )
}
