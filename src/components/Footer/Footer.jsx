import React from 'react'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="cl-footer">
      <div className="cl-footer-grid">
        {/* Brand + Address */}
        <div className="col brand">
          <h3 className="logo">Funiro<span className="dot">.</span></h3>
          <address className="addr">
            400 University Drive Suite 200 Coral<br/>
            Gables,<br/>
            FL 33134 USA
          </address>
        </div>

        {/* Links */}
        <nav className="col">
          <h4>Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#cities">Cities</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Help */}
        <nav className="col">
          <h4>Help</h4>
          <ul>
            <li><a href="#payment">Payment Options</a></li>
            <li><a href="#returns">Returns</a></li>
            <li><a href="#privacy">Privacy Policies</a></li>
          </ul>
        </nav>

        {/* Newsletter */}
        <div className="col newsletter">
          <h4>Newsletter</h4>
          <form
            className="inline-form"
            onSubmit={(e)=>{e.preventDefault(); alert('Subscribed!')}}
          >
            <input
              type="email"
              placeholder="Enter Your Email Address"
              aria-label="Email address"
              required
            />
            <button type="submit" className="underline-btn">SUBSCRIBE</button>
          </form>
        </div>
      </div>

      <hr className="divider" />

      <div className="fineprint">© {year} Culture Lens. All rights reserved</div>
    </footer>
  )
}
