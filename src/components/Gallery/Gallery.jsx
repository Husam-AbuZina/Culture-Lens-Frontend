import './Gallery.css'
import React from 'react'
import { useTranslation } from 'react-i18next'

const images = [
  'https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1547658719-1f78511f0a7e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
]

export default function Gallery(){
  const { t } = useTranslation()
  return (
    <section className="section" id="gallery">
      <h2>{t('gallery.title')}</h2>
      <p>{t('gallery.sub')}</p>
      <div className="grid grid-3">
        {images.map((src, i) => (
          <figure key={i} className="card" style={{padding:0, overflow:'hidden'}}>
            <img
              src={src}
              alt={`${t('gallery.alt')} ${i+1}`}
              style={{width:'100%', height:220, objectFit:'cover'}}
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </section>
  )
}
