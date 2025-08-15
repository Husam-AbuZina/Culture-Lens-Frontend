import './CTA.css'
import React from 'react'

export default function CTA(){
  return (
    <section className="section" id="contact">
      <div className="card" style={{textAlign:'center'}}>
        <h2>Ready to launch?</h2>
        <p>Drop your email below and we’ll reach out within 24 hours.</p>
        <form className="cta-form" onSubmit={(e)=>{ e.preventDefault(); alert('Submitted!')}}>
          <input required type="email" placeholder="you@example.com" aria-label="Email" />
          <button className="button" type="submit">Get in touch</button>
        </form>
      </div>
    </section>
  )
}
