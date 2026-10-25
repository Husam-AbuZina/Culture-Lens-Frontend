import { useTranslation } from "react-i18next"
import PageMeta from "../../components/PageMeta/PageMeta"
import "./LegalPage.css"

export default function LegalPage({ type }) {
  const { t } = useTranslation()
  const sections = t(`legal.${type}.sections`, { returnObjects: true })

  return (
    <main className="legal-page section">
      <PageMeta title={t(`legal.${type}.title`)} description={t(`legal.${type}.intro`)} />
      <header className="legal-header">
        <span className="eyebrow">{t("siteName")}</span>
        <h1>{t(`legal.${type}.title`)}</h1>
        <p className="lead">{t(`legal.${type}.intro`)}</p>
        <dl className="legal-dates">
          <div>
            <dt>{t("legal.effectiveDate")}</dt>
            <dd>{t(`legal.${type}.effectiveDate`)}</dd>
          </div>
          <div>
            <dt>{t("legal.lastUpdated")}</dt>
            <dd>{t(`legal.${type}.lastUpdated`)}</dd>
          </div>
        </dl>
        <p className="legal-notice">{t("legal.notice")}</p>
      </header>

      <div className="legal-layout">
        <nav className="legal-toc" aria-label={t("legal.contents")}>
          <strong>{t("legal.contents")}</strong>
          <ol>
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="legal-content">
          {sections.map((section, index) => (
            <section id={section.id} key={section.id}>
              <span className="legal-section-number">{String(index + 1).padStart(2, "0")}</span>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.items?.length > 0 && (
                <ul>
                  {section.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </section>
          ))}
        </article>
      </div>
    </main>
  )
}
