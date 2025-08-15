import React from 'react'
import './HashtagWall.css'

export default function HashtagWall({ photos }) {
  const items = photos?.length ? photos : [
    { src: '/images/AlAqusa.jpg', alt: 'Dome of the Rock' },
    { src: '/images/BethlehemChurch.jpg', alt: 'Bethlehem Church' },
    { src: '/images/Nablus.jpg', alt: 'Roman columns Sebastia' },
    { src: '/images/OldTown.jpg', alt: 'Old city street' },
    { src: '/images/Churches.jpg', alt: 'Citadel' },
    { src: '/images/Oil Maker.jpg', alt: 'Market' },
    { src: '/images/HeishamPalace.jpg', alt: 'Courtyard' },
    { src: '/images/HebronMeusuem.jpg', alt: 'Stone interior' },
    { src: '/images/Acre.jpg', alt: 'Historic roofs' },
  ]

  return (
    <section className="wall">
      <div className="wall-head">
        <div className="kicker">Share Your Story</div>
        <h2>#Culture_Lens</h2>
      </div>

      <div className="masonry">
        {items.map((p, i) => (
          <figure className="tile" key={i}>
            <img src={p.src} alt={p.alt || `photo ${i + 1}`} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  )
}
