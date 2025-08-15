import './Gallery.css'
import React from 'react'

const images = [
  'https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1547658719-1f78511f0a7e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
]

export default function Gallery(){
  return (
    <section className="section" id="gallery">
      <h2>Gallery</h2>
      <p>Real UI shots to make your page feel alive.</p>
      <div className="grid grid-3">
        {images.map((src, i) => (
          <figure key={i} className="card" style={{padding:0, overflow:'hidden'}}>
            <img src={src} alt={`Gallery ${i+1}`} style={{width:'100%', height:220, objectFit:'cover'}} />
          </figure>
        ))}
      </div>
    </section>
  )
}
