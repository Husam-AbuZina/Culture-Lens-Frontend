import { useMemo, useRef, useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import './Heritage.css'
import { useTranslation } from 'react-i18next'

export default function Heritage({ items }) {
  const { t } = useTranslation();

  const data = useMemo(() => items?.length ? items : [
    {
      title: t("heritage.items.innerPeace"),
      place: t("heritage.items.heishamPalace"),
      img: '/images/HeishamPalace.jpg'
    },
    {
      title: t("heritage.items.churchOfMahd"),
      place: t("heritage.items.bethlehem"),
      img: '/images/BethlehemChurch.jpg'
    },
    {
      title: t("heritage.items.citadelWalls"),
      place: t("heritage.items.jerusalem"),
      img: '/images/Churches2.jpg'
    },
    {
      title: t("heritage.items.mountainOfLocals"),
      place: t("heritage.items.nablus"),
      img: '/images/Nablus.jpg'
    },
  ], [items, t])

  const bigRef = useRef(null)
  const smRef = useRef(null)
  const [idx, setIdx] = useState(0)

  const next = () => setIdx(i => (i + 1) % data.length)
  const prev = () => setIdx(i => (i - 1 + data.length) % data.length)

  useEffect(() => {
    const scrollToIndex = (el) => {
      if (!el) return
      const w = el.clientWidth
      el.scrollTo({ left: w * idx, behavior: 'smooth' })
    }
    scrollToIndex(bigRef.current)
    scrollToIndex(smRef.current)
  }, [idx])

  return (
    <section className="heritage">
      {/* Left copy block */}
      <div className="h-left">
        <span className="eyebrow">{t("hashtag.kicker")}</span>
        <h2>{t("heritage.title")}</h2>
        <p>{t("heritage.sub")}</p>
        <Link className="h-btn" to="/cities">
          {t("heritage.cta")}
        </Link>
      </div>

      {/* Right gallery */}
      <div className="h-right">
        <div className="h-gallery">
          {/* Big slider */}
          <div className="h-big" ref={bigRef}>
            {data.map((it, i) => (
              <figure key={i} className="h-slide">
                <img src={it.img} alt={it.place} loading="lazy" />
                <figcaption className="h-cap">
                  <div className="h-cap-top">
                    <span className="num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="dash" />
                    <span className="place">{it.place}</span>
                  </div>
                  <div className="h-cap-bottom">
                    <strong className="cap-title">{it.title}</strong>
                    <button className="cap-arrow" onClick={next} aria-label={t("heritage.next")}>→</button>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Small slider */}
          <div className="h-small" ref={smRef}>
            {data.map((it, i) => (
              <figure key={i} className="h-thumb">
                <img src={it.img} alt={it.place} loading="lazy" />
              </figure>
            ))}
            <button className="thumb-next" onClick={next} aria-label={t("heritage.next")}>›</button>
          </div>
        </div>

        {/* Dots */}
        <div className="h-dots">
          {data.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === idx ? 'is-active' : ''}`}
              aria-label={`${t("heritage.goto")} ${i + 1}`}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>

        {/* Mobile arrows */}
        <div className="h-arrows">
          <button onClick={prev} aria-label={t("heritage.prev")}>‹</button>
          <button onClick={next} aria-label={t("heritage.next")}>›</button>
        </div>
      </div>
    </section>
  )
}
