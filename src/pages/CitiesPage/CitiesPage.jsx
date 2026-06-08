import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { getAllCities } from "../../data/cities"
import PageMeta from "../../components/PageMeta/PageMeta"
import "./CitiesPage.css"

export default function CitiesPage() {
  const { t } = useTranslation()

  return (
    <main className="cities-page">
      <PageMeta title={t("citiesPage.title")} description={t("citiesPage.subtitle")} />
      <header className="cp-hero" style={{ backgroundImage: "url(/images/OldTown.jpg)" }}>
        <div className="hero-overlay" />
        <div className="cp-hero-inner">
          <span className="eyebrow">{t("citiesPage.eyebrow")}</span>
          <h1>{t("citiesPage.title")}</h1>
          <p>{t("citiesPage.subtitle")}</p>
        </div>
      </header>

      <section className="section cp-grid">
        {getAllCities().map((city) => (
          <Link key={city.slug} to={`/city/${city.slug}`} className="cp-card">
            <figure className="cp-img-wrap">
              <img src={city.hero} alt={t(`cities.${city.slug}.name`)} loading="lazy" />
            </figure>
            <div className="cp-info">
              <h2>{t(`cities.${city.slug}.name`)}</h2>
              <p>{t(`cities.${city.slug}.summary`)}</p>
              <span>{t("citiesPage.explore")} →</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}
