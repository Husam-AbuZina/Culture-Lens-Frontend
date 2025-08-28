import './CTA.css'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function CTA(){
  const { t } = useTranslation()

  return (
    <section className="section" id="contact">
      <div className="card" style={{textAlign:'center'}}>
        <h2>{t("cta.title")}</h2>
        <p>{t("cta.sub")}</p>
        <form
          className="cta-form"
          onSubmit={(e)=>{ e.preventDefault(); alert(t("cta.submitted"))}}
        >
          <input
            required
            type="email"
            placeholder={t("cta.placeholder")}
            aria-label={t("cta.aria")}
          />
          <button className="button" type="submit">{t("cta.button")}</button>
        </form>
      </div>
    </section>
  )
}
