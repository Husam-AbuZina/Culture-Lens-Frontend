import React, { useMemo, useRef, useState, useEffect } from 'react'
import './Heritage.css'

export default function Heritage({ items }) {
  const data = useMemo(() => items?.length ? items : [
    {
      title: 'Inner Peace',
      place: 'Heisham Palace',
      img: '/images/HeishamPalace.jpg'
    },
    {
      title: 'Church of Mahd',
      place: 'Bethlehem',
      img: '/images/BethlehemChurch.jpg'
    },
    {
      title: 'Citadel Walls',
      place: 'Jerusalem',
      img: '/images/Churches2.jpg'
    },
    {
      title: 'Mountain of Locals',
      place: 'Nablus',
      img: '/images/Nablus.jpg'
    },
  ], [items])

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
        <h2><span>20+ </span>Ancient<br/>heritage Places</h2>
        <p>
          The history will inspire you about the old cultures and their traditions.
        </p>
        <button className="h-btn" onClick={() => (window.location.hash = '#cities')}>
          Explore More
        </button>
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
                    <button className="cap-arrow" onClick={next} aria-label="Next">→</button>
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
            <button className="thumb-next" onClick={next} aria-label="Next">›</button>
          </div>
        </div>

        {/* Dots */}
        <div className="h-dots">
          {data.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === idx ? 'is-active' : ''}`}
              aria-label={`Go to ${i + 1}`}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>

        {/* Mobile arrows */}
        <div className="h-arrows">
          <button onClick={prev} aria-label="Previous">‹</button>
          <button onClick={next} aria-label="Next">›</button>
        </div>
      </div>
    </section>
  )
}
