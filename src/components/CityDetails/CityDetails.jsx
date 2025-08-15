import React, { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { getCity } from "../../data/cities"
import "./CityDetails.css"

export default function CityDetails(){
  const { slug } = useParams()
  const city = getCity(slug)

  useEffect(() => {
    if (city) document.title = `${city.name} • Culture Lens`
  }, [city])

  if (!city) {
    return (
      <section className="city-details section">
        <h2>City not found</h2>
        <p>Check the URL or go back to the cities list.</p>
        <Link className="back-btn" to="/#cities">← Back to Cities</Link>
      </section>
    )
  }

  return (
    <section className="city-details">
      {/* Hero */}
      <header className="cd-hero" style={{backgroundImage:`url(${city.hero})`}}>
        <div className="cd-hero-inner">
          <h1>{city.name}</h1>
          <p>{city.summary}</p>
          <Link className="cd-cta" to="/#cities">Browse other cities</Link>
        </div>
      </header>

      {/* Gallery */}
      <div className="section cd-gallery">
        {city.gallery.map((src, i) => (
          <figure className="cd-shot" key={i}>
            <img src={src} alt={`${city.name} ${i+1}`} loading="lazy" />
          </figure>
        ))}
      </div>

      {/* Heritage Places */}
      <div className="section">
        <h2 className="cd-h2">Heritage Places</h2>
        <div className="cd-grid">
          {city.places.map((p, i) => (
            <article className="cd-card" key={i}>
              <figure className="cd-media">
                <img src={p.img} alt={p.title} loading="lazy" />
              </figure>
              <div className="cd-info">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Back */}
      <div className="section cd-back">
        <Link
          className="back-btn"
          to="/"
          onClick={() => setTimeout(() => {
            document.getElementById('cities')?.scrollIntoView({ behavior:'smooth' })
          }, 0)}
        >
          ← Back to Cities
        </Link>
      </div>
    </section>
  )
}
