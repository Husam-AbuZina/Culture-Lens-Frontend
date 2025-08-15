import React, { useMemo, useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Cities.css'

export default function Cities({ items }) {
  const defaultItems = useMemo(() => ([
    { name: 'Hebron',    img: '/images/HebronMeusuem.jpg' },
    { name: 'Bethlehem', img: '/images/BethlehemChurch.jpg' },
    { name: 'Jerusalem', img: '/images/AlAqusa.jpg' },
  ]), [])

  const data = items?.length ? items : defaultItems
  const trackRef = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const updateEdgeState = () => {
    const el = trackRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    setAtStart(scrollLeft <= 4)
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 4)
  }

  useEffect(() => {
    updateEdgeState()
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', updateEdgeState, { passive: true })
    window.addEventListener('resize', updateEdgeState)
    return () => {
      el.removeEventListener('scroll', updateEdgeState)
      window.removeEventListener('resize', updateEdgeState)
    }
  }, [])

  const scrollByAmount = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('.city-card')
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.9
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section id="cities" className="cities-section">
      <div className="cities-header">
        <h2>Browse The Cities 🧭</h2>
        <p>Every city with its heritage & history within your reach.</p>
      </div>

      <div className="cities-slider">
        <button className="nav-btn left" onClick={() => scrollByAmount(-1)} aria-label="Previous" disabled={atStart}>‹</button>

        <div className="cities-track" ref={trackRef} tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') scrollByAmount(1)
            if (e.key === 'ArrowLeft') scrollByAmount(-1)
          }}>
          {data.map((c, i) => (
            <Link to={`/city/${c.name.toLowerCase()}`} className="city-card" key={i}>
              <figure className="city-figure">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  onError={(e)=>{ e.currentTarget.src = '/images/OldTown.jpg' }}
                />
              </figure>
              <h3 className="city-name">{c.name}</h3>
            </Link>
          ))}
        </div>

        <button className="nav-btn right" onClick={() => scrollByAmount(1)} aria-label="Next" disabled={atEnd}>›</button>
      </div>
    </section>
  )
}
