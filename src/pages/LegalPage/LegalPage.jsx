import { useTranslation } from "react-i18next"
import PageMeta from "../../components/PageMeta/PageMeta"
import "./LegalPage.css"

export default function LegalPage({ type }) {
  const { t } = useTranslation()
  const sections = t(`legal.${type}.sections`, { returnObjects: true })

  return (
    <main className="legal-page section">
      <PageMeta title={t(`legal.${type}.title`)} description={t(`legal.${type}.intro`)} />
      <span className="eyebrow">{t("siteName")}</span>
      <h1>{t(`legal.${type}.title`)}</h1>
      <p className="lead">{t(`legal.${type}.intro`)}</p>
      {sections.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          <p>{section.text}</p>
        </section>
      ))}
    </main>
  )
}
