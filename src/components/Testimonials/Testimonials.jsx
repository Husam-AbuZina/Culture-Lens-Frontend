import './Testimonials.css'
import React from 'react'

const quotes = [
  { name:'Lina K.', role:'Founder', text:'The template is gorgeous and saved us weeks.'},
  { name:'Omar S.', role:'Engineer', text:'Great structure, clear components, easy to extend.'},
  { name:'Maya R.', role:'Designer', text:'Finally a dark UI that feels premium without noise.'},
]

export default function Testimonials(){
  return (
    <section className="section" id="testimonials">
      <h2>What people say</h2>
      <div className="grid grid-3">
        {quotes.map((q,i) => (
          <blockquote key={i} className="card" style={{display:'flex', flexDirection:'column', gap:10}}>
            <p style={{fontSize:18, color:'#e2e8f0'}}>“{q.text}”</p>
            <div style={{display:'flex', alignItems:'center', gap:10}}>
              <div style={{width:34, height:34, borderRadius:9999, background:'linear-gradient(180deg, var(--primary), var(--accent))'}}/>
              <div><strong>{q.name}</strong><div style={{color:'var(--muted)'}}>{q.role}</div></div>
            </div>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
