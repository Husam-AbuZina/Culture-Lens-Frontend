import './Features.css'
import React from 'react'

const items = [
  { title: 'Atomic Components', desc: 'Small, reusable pieces you can mix and match.' },
  { title: 'Dark UI Polish', desc: 'Tasteful gradients, soft shadows, and glassy cards.' },
  { title: 'Animation Ready', desc: 'Subtle framer‑motion transitions are built in.' },
  { title: 'Router Built‑in', desc: 'React Router scaffolded and ready to go.' },
  { title: 'Accessible', desc: 'Semantic HTML, focus styles, and high contrast.' },
  { title: 'Fast & Lightweight', desc: 'Vite + React for a crisp dev experience.' },
]

export default function Features(){
  return (
    <section className="section" id="features">
      <h2>Features</h2>
      <p>Everything you need to launch quickly and look great.</p>
      <div className="grid grid-3">
        {items.map((it,i) => (
          <article key={i} className="card">
            <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:12}}>
              <h3 style={{margin:0}}>{it.title}</h3>
              <span className="badge">New</span>
            </div>
            <p>{it.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
