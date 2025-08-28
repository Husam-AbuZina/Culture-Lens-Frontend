import React, { useMemo, useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Cities.css'
import { useTranslation } from 'react-i18next'

export default function Cities({ items }) {
  const { t } = useTranslation()

  // Default items with translation keys
  const defaultItems = useMemo(() => ([
    {
      slug: 'hebron',
      name: t('cities.list.hebron'),
      img: '/images/HebronMeusuem.jpg'
    },
    {
      slug: 'bethlehem',
      name: t('cities.list.bethlehem'),
      img: '/images/BethlehemChurch.jpg'
    },
    {
      slug: 'jerusalem',
      name: t('cities.list.jerusalem'),
      img: '/images/AlAqusa.jpg'
    }
  ]), [t])
  

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
        <h2>{t('cities.title')}</h2>
        <p>{t('cities.sub')}</p>
      </div>

      <div className="cities-slider">
        <button
          className="nav-btn left"
          onClick={() => scrollByAmount(-1)}
          aria-label={t('cities.prev')}
          disabled={atStart}
        >‹</button>

        <div
          className="cities-track"
          ref={trackRef}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') scrollByAmount(1)
            if (e.key === 'ArrowLeft') scrollByAmount(-1)
          }}
        >
          {data.map((c, i) => (
            <Link to={`/city/${c.slug || c.name.toLowerCase()}`} className="city-card" key={i}>
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

        <button
          className="nav-btn right"
          onClick={() => scrollByAmount(1)}
          aria-label={t('cities.next')}
          disabled={atEnd}
        >›</button>
      </div>
    </section>
  )
}
