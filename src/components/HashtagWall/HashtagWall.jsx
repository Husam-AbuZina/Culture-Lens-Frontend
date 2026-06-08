import './HashtagWall.css'
import { useTranslation } from 'react-i18next'

export default function HashtagWall({ photos }) {
  const { t } = useTranslation();

  const items = photos?.length ? photos : [
    { src: '/images/AlAqusa.jpg', alt: t("hashtag.items.dome") },
    { src: '/images/BethlehemChurch.jpg', alt: t("hashtag.items.bethlehemChurch") },
    { src: '/images/Nablus.jpg', alt: t("hashtag.items.sebastia") },
    { src: '/images/OldTown.jpg', alt: t("hashtag.items.oldTown") },
    { src: '/images/Churches.jpg', alt: t("hashtag.items.citadel") },
    { src: '/images/Oil Maker.jpg', alt: t("hashtag.items.market") },
    { src: '/images/HeishamPalace.jpg', alt: t("hashtag.items.courtyard") },
    { src: '/images/HebronMeusuem.jpg', alt: t("hashtag.items.museum") },
    { src: '/images/Acre.jpg', alt: t("hashtag.items.acre") }
  ]

  return (
    <section className="wall">
      <div className="wall-head">
        <div className="kicker">{t("hashtag.kicker")}</div>
        <h2>#Culture_Lens</h2>
      </div>

      <div className="masonry">
        {items.map((p, i) => (
          <figure className="tile" key={i}>
            <img src={p.src} alt={p.alt || `${t("hashtag.photo")} ${i + 1}`} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  )
}
