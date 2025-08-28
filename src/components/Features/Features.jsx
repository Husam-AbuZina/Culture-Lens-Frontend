import './Features.css'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Features(){
  const { t } = useTranslation()

  const items = [
    { title: t('features.items.atomic.title'), desc: t('features.items.atomic.desc') },
    { title: t('features.items.darkPolish.title'), desc: t('features.items.darkPolish.desc') },
    { title: t('features.items.animation.title'), desc: t('features.items.animation.desc') },
    { title: t('features.items.router.title'), desc: t('features.items.router.desc') },
    { title: t('features.items.accessible.title'), desc: t('features.items.accessible.desc') },
    { title: t('features.items.fast.title'), desc: t('features.items.fast.desc') }
  ]

  return (
    <section className="section" id="features">
      <h2>{t('features.title')}</h2>
      <p>{t('features.sub')}</p>
      <div className="grid grid-3">
        {items.map((it,i) => (
          <article key={i} className="card">
            <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:12}}>
              <h3 style={{margin:0}}>{it.title}</h3>
              <span className="badge">{t('features.badge')}</span>
            </div>
            <p>{it.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
