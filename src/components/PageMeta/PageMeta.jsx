import { useEffect } from "react"
import { useTranslation } from "react-i18next"

function setMeta(attribute, key, content) {
  if (!content) return
  let element = document.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement("meta")
    element.setAttribute(attribute, key)
    document.head.append(element)
  }
  element.setAttribute("content", content)
}

export default function PageMeta({ title, description, image }) {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const pageTitle = title ? `${title} | ${t("siteName")}` : t("siteName")
    document.title = pageTitle
    document.documentElement.lang = i18n.resolvedLanguage || "en"
    document.documentElement.dir = i18n.dir()

    setMeta("name", "description", description)
    setMeta("property", "og:title", pageTitle)
    setMeta("property", "og:description", description)
    setMeta("property", "og:url", window.location.href)
    setMeta("property", "og:image", image)
  }, [description, i18n, i18n.resolvedLanguage, image, t, title])

  return null
}
