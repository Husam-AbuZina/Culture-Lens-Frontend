// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en/common.json";
import ar from "./locales/ar/common.json";
import enLegal from "./locales/en/legal.json";
import arLegal from "./locales/ar/legal.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: { ...en, legal: enLegal } },
      ar: { common: { ...ar, legal: arLegal } },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "ar"],
    nonExplicitSupportedLngs: true,
    ns: ["common"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

document.documentElement.lang = i18n.resolvedLanguage || "en";
document.documentElement.dir = i18n.dir();

export default i18n;
