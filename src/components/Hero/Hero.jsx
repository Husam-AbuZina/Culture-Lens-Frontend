import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-wrap">
      {/* Background image */}
      <div
        className="hero-bg"
        role="img"
        aria-label="Palestinian flag above the city"
      />

      {/* Right card */}
      <div className="hero-card">
        <span className="hero-kicker">New Way</span>

        <h1 className="hero-title">
          Discover Palestine<br/>Like Never Before.
        </h1>

        <p className="hero-sub">
          This is the place where you find everything you need about
          tourism in Palestine in one place.
        </p>

        <button className="hero-cta" onClick={() => window.location.hash = '#cities'}>
          DISCOVER NOW
        </button>
      </div>
    </section>
  )
}
