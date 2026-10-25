import content from "./culture_lens_content.json" with { type: "json" }

const cloudName = "gkyn6vzf"

export function cloudinaryImage(fileName, width = 1200) {
  const publicFileName = fileName === "Oil Maker.webp" ? "Oil_Maker.webp" : fileName
  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,w_${width}/${publicFileName}`
}

export function localized(value, language = "en") {
  return value?.[language?.startsWith("ar") ? "ar" : "en"] ?? value?.en ?? ""
}

const places = content.places.map((place) => ({
  ...place,
  slug: place.id,
  image: cloudinaryImage(place.image),
  gallery: place.gallery.map((fileName) => cloudinaryImage(fileName)),
}))

const placesByCity = places.reduce((groups, place) => {
  groups.set(place.cityId, [...(groups.get(place.cityId) ?? []), place])
  return groups
}, new Map())

const cities = content.cities.map((city) => ({
  ...city,
  slug: city.id,
  hero: cloudinaryImage(city.heroImage, 1600),
  gallery: city.gallery.map((fileName) => cloudinaryImage(fileName)),
  places: placesByCity.get(city.id) ?? [],
}))

const citiesBySlug = new Map(cities.map((city) => [city.slug, city]))
const placesBySlug = new Map(places.map((place) => [place.slug, place]))

export function getCity(slug) {
  return citiesBySlug.get(slug?.toLowerCase())
}

export function getAllCities() {
  return cities
}

export function getPlace(slug) {
  const place = placesBySlug.get(slug?.toLowerCase())
  if (!place) return undefined

  return { ...place, city: getCity(place.cityId) }
}

export function getAllPlaces() {
  return places
}
