import { useTranslation } from "react-i18next"
import "./HashtagWall.css"

export default function HashtagWall({ photos }) {
  const { t } = useTranslation()
  const items = photos?.length ? photos : [
    { src: "/images/AlAqusa.jpg", alt: t("hashtag.items.dome") },
    { src: "/images/BethlehemChurch.jpg", alt: t("hashtag.items.bethlehemChurch") },
    { src: "/images/Nablus.jpg", alt: t("hashtag.items.sebastia") },
    { src: "/images/OldTown.jpg", alt: t("hashtag.items.oldTown") },
    { src: "/images/Oil Maker.jpg", alt: t("hashtag.items.market") },
  ]

  return (
    <section className="wall">
      <header className="wall-head">
        <div>
          <span className="eyebrow">{t("hashtag.kicker")}</span>
          <h2>#Culture_Lens</h2>
        </div>
        <p>{t("hero.sub")}</p>
      </header>

      <div className="archive-grid">
        {items.map((photo, index) => (
          <figure className={`archive-tile archive-tile-${index + 1}`} key={photo.src}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <figcaption>
              <span>CL—{String(index + 1).padStart(3, "0")}</span>
              <strong>{photo.alt}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
