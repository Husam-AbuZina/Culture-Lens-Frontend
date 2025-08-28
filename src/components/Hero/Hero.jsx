import React from "react";
import "./Hero.css";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t, i18n } = useTranslation();

  return (
    <section className="hero-wrap" lang={i18n.language}>
      {/* Background image */}
      <div
        className="hero-bg"
        role="img"
        aria-label={t("hero.bgAria")}
      />

      {/* Right card */}
      <div className="hero-card">
        <span className="hero-kicker">{t("hero.kicker")}</span>

        <h1 className="hero-title">
          {t("hero.titleLine1")}<br />{t("hero.titleLine2")}
        </h1>

        <p className="hero-sub">{t("hero.sub")}</p>

        <button
          className="hero-cta"
          onClick={() => (window.location.hash = "#cities")}
        >
          {t("hero.cta")}
        </button>
      </div>
    </section>
  );
}
