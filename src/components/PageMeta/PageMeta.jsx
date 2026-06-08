import { useEffect } from "react"
import { useTranslation } from "react-i18next"

export default function PageMeta({ title, description }) {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.title = title ? `${title} | ${t("siteName")}` : t("siteName")
    document.documentElement.lang = i18n.resolvedLanguage || "en"
    document.documentElement.dir = i18n.dir()

    const meta = document.querySelector('meta[name="description"]')
    if (meta && description) meta.setAttribute("content", description)
  }, [description, i18n, i18n.resolvedLanguage, t, title])

  return null
}
