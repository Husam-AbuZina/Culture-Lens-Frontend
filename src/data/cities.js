import content from "./culture_lens_content.json" with { type: "json" }

const cloudName = "gkyn6vzf"

// These are intentionally broader than the source categories. The source data
// preserves the detailed classification for each destination, while the browse
// experience stays simple enough to scan and use.
export const destinationCategories = [
  { id: "archaeology", name: { en: "Archaeology", ar: "الآثار" } },
  { id: "historic-architecture", name: { en: "Historic Architecture", ar: "العمارة التاريخية" } },
  { id: "religious-heritage", name: { en: "Religious Heritage", ar: "التراث الديني" } },
  { id: "museums-culture", name: { en: "Museums & Culture", ar: "المتاحف والثقافة" } },
  { id: "nature-landscapes", name: { en: "Nature & Landscapes", ar: "الطبيعة والمشاهد" } },
  { id: "crafts-living-heritage", name: { en: "Crafts & Living Heritage", ar: "الحرف والتراث الحي" } },
  { id: "community-learning", name: { en: "Community & Learning", ar: "المجتمع والتعليم" } },
]

const sourceCategoryGroups = {
  archaeology: new Set([
    "Archaeological Site", "Archaeological site", "Archaeological Sites", "Archaeological sites",
    "Archaeological heritage", "Archaeological Heritage", "Archaeology", "Archaeological landscape",
    "Canaanite heritage", "Roman heritage", "Byzantine heritage", "Cemetery",
    "Natural and archaeological heritage",
  ]),
  "historic-architecture": new Set([
    "Historic Quarter", "Historic Town", "Historic town", "Historic cities", "Historic Village",
    "Historic village", "Historic Villages", "Village", "Village heritage", "Rural heritage",
    "Historic Building", "Historic buildings", "Historic Architecture", "Palace", "Palaces",
    "Historic palace", "Tower", "Fortification", "Fortresses", "Fortified heritage", "Historic fortress",
    "Ottoman architecture", "Ottoman heritage", "Urban heritage", "Civic heritage", "Historic gate",
  ]),
  "religious-heritage": new Set([
    "Church", "Churches", "Mosque", "Mosques", "Monastery", "Monasteries", "Shrine", "Shrines",
    "Christian heritage", "Monastic heritage", "Jewish heritage", "Early Islamic heritage",
    "Popular religious heritage", "Islamic heritage", "Sufi heritage", "Samaritan heritage",
    "Religious heritage", "Religious Heritage", "Sacred heritage", "Sacred architecture",
    "Pilgrimage heritage", "Islamic architecture", "Islamic landmark", "Sacred landscape",
  ]),
  "museums-culture": new Set([
    "Museum", "Museums", "Cultural Center", "Cultural centers", "Cultural venue", "Popular heritage",
    "Memorials", "Social heritage", "Public space",
  ]),
  "nature-landscapes": new Set([
    "Natural Heritage", "Natural heritage", "Nature & Memory", "Public landscape", "Cultural Landscape",
    "Cultural landscape", "Zoo & Park", "Water Heritage", "Water heritage", "Natural and industrial heritage",
  ]),
  "crafts-living-heritage": new Set([
    "Industrial Heritage", "Industrial heritage", "Craft heritage", "Railway heritage", "Commercial heritage",
    "Historic markets", "Historic market", "Markets and crafts", "Agricultural heritage",
  ]),
  "community-learning": new Set([
    "Educational Heritage", "Educational heritage", "Education heritage", "Educational landmark", "Universities",
    "Visitor centers", "Visitor Center",
  ]),
}

const sourceCategoryToGroup = new Map(
  Object.entries(sourceCategoryGroups).flatMap(([group, categories]) =>
    [...categories].map((category) => [category, group]),
  ),
)

export function cloudinaryImage(fileName, width = 1200) {
  const publicFileName = fileName === "Oil Maker.webp" ? "Oil_Maker.webp" : fileName
  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,w_${width}/${publicFileName}`
}

export function localized(value, language = "en") {
  return value?.[language?.startsWith("ar") ? "ar" : "en"] ?? value?.en ?? ""
}

export function getDestinationCategory(place) {
  return sourceCategoryToGroup.get(place.category?.en)
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
