import React from "react"
import { Link } from "react-router-dom"
import { getAllCities } from "../../data/cities"
import "./CitiesPage.css"

export default function CitiesPage() {
  const cities = getAllCities()

  return (
    <section className="cities-page">
      {/* Hero */}
      <header className="cp-hero" style={{ backgroundImage: "url(/images/cities-hero.jpg)" }}>
        <div className="cp-hero-inner">
          <h1>Explore Palestinian Cities</h1>
          <p>Each city holds a unique heritage, rich culture, and unforgettable history.</p>
        </div>
      </header>

      {/* Grid of cities */}
      <div className="section cp-grid">
        {cities.map((city) => (
          <Link key={city.slug} to={`/city/${city.slug}`} className="cp-card">
            <figure className="cp-img-wrap">
              <img src={city.hero} alt={city.name} loading="lazy" />
            </figure>
            <div className="cp-info">
              <h3>{city.name}</h3>
              <p>{city.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
