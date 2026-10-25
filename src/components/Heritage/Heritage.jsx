import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { getAllPlaces, localized } from "../../data/cities"
import "./Heritage.css"

export default function Heritage({ items }) {
  const { t, i18n } = useTranslation()
  const [index, setIndex] = useState(0)

  const data = useMemo(
    () => items?.length
      ? items
      : getAllPlaces().slice(0, 4).map((place) => ({
        title: localized(place.category, i18n.language),
        place: localized(place.name, i18n.language),
        img: place.image,
      })),
    [items, i18n.language],
  )

  const active = data[index]
  const next = () => setIndex((value) => (value + 1) % data.length)
  const previous = () => setIndex((value) => (value - 1 + data.length) % data.length)

  return (
    <section className="heritage">
      <div className="heritage-heading">
        <span className="heritage-mark">✦</span>
        <span className="eyebrow">{t("hashtag.kicker")}</span>
        <h2>{t("heritage.title")}</h2>
        <p>{t("heritage.sub")}</p>
        <Link className="text-link" to="/cities">{t("heritage.cta")} ↗</Link>
      </div>

      <div className="heritage-stage">
        <figure className="heritage-image">
          <img src={active.img} alt={active.place} />
          <figcaption>
            <span>{String(index + 1).padStart(2, "0")} / {String(data.length).padStart(2, "0")}</span>
            <div>
              <strong>{active.place}</strong>
              <em>{active.title}</em>
            </div>
          </figcaption>
        </figure>

        <div className="heritage-controls">
          <button onClick={previous} aria-label={t("heritage.prev")}>←</button>
          <div className="heritage-progress">
            {data.map((item, itemIndex) => (
              <button
                key={item.place}
                className={itemIndex === index ? "is-active" : ""}
                aria-label={`${t("heritage.goto")} ${itemIndex + 1}`}
                onClick={() => setIndex(itemIndex)}
              />
            ))}
          </div>
          <button onClick={next} aria-label={t("heritage.next")}>→</button>
        </div>
      </div>

      <div className="heritage-index">
        {data.map((item, itemIndex) => (
          <button
            className={itemIndex === index ? "is-active" : ""}
            key={item.place}
            onClick={() => setIndex(itemIndex)}
          >
            <span>0{itemIndex + 1}</span>
            <strong>{item.place}</strong>
          </button>
        ))}
      </div>
    </section>
  )
}
