import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { destinationCategories, getAllCities, getAllPlaces, getDestinationCategory, getPlace } from "../src/data/cities.js"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const readJson = (file) => JSON.parse(fs.readFileSync(path.join(root, file), "utf8"))

test("every migrated city and place has valid bilingual content and Cloudinary images", () => {
  const slugs = new Set()

  for (const city of getAllCities()) {
    assert.ok(city.slug)
    assert.ok(city.name.en)
    assert.ok(city.name.ar)
    assert.ok(city.summary.en)
    assert.ok(city.summary.ar)
    assert.match(city.hero, /^https:\/\/res\.cloudinary\.com\/gkyn6vzf\/image\/upload\/f_auto,q_auto,w_1600\//)

    for (const place of city.places) {
      assert.ok(place.slug)
      assert.ok(!slugs.has(place.slug), `duplicate place slug: ${place.slug}`)
      slugs.add(place.slug)
      assert.equal(getPlace(place.slug)?.city.slug, city.slug)
      assert.ok(place.name.en)
      assert.ok(place.name.ar)
      assert.ok(place.summary.en)
      assert.ok(place.summary.ar)
      assert.ok(place.story.en)
      assert.ok(place.story.ar)
      assert.match(place.image, /^https:\/\/res\.cloudinary\.com\/gkyn6vzf\/image\/upload\/f_auto,q_auto,w_1200\//)
      for (const image of place.gallery) {
        assert.match(image, /^https:\/\/res\.cloudinary\.com\/gkyn6vzf\/image\/upload\/f_auto,q_auto,w_1200\//)
      }
    }
  }

  assert.equal(getAllCities().length, 12)
  assert.equal(getAllPlaces().length, 295)
  assert.equal(slugs.size, 295)
})

test("English and Arabic provide matching translation structures", () => {
  const en = readJson("src/locales/en/common.json")
  const ar = readJson("src/locales/ar/common.json")

  const keys = (value, prefix = "") =>
    Object.entries(value).flatMap(([key, child]) => {
      const current = prefix ? `${prefix}.${key}` : key
      if (Array.isArray(child)) return [current]
      if (child && typeof child === "object") return keys(child, current)
      return [current]
    })

  assert.deepEqual(keys(ar).sort(), keys(en).sort())
})

test("every destination belongs to one concise browse category", () => {
  const categoryIds = new Set(destinationCategories.map((category) => category.id))

  assert.equal(destinationCategories.length, 7)
  for (const category of destinationCategories) {
    assert.ok(category.name.en)
    assert.ok(category.name.ar)
  }
  for (const place of getAllPlaces()) {
    assert.ok(categoryIds.has(getDestinationCategory(place)), `missing browse category: ${place.id}`)
  }
})

test("legal policies have matching bilingual sections and metadata", () => {
  const en = readJson("src/locales/en/legal.json")
  const ar = readJson("src/locales/ar/legal.json")

  for (const type of ["privacy", "terms"]) {
    assert.ok(en[type].effectiveDate)
    assert.ok(ar[type].effectiveDate)
    assert.equal(ar[type].sections.length, en[type].sections.length)
    assert.deepEqual(
      ar[type].sections.map((section) => section.id),
      en[type].sections.map((section) => section.id),
    )

    for (const locale of [en, ar]) {
      for (const section of locale[type].sections) {
        assert.ok(section.id)
        assert.ok(section.title)
        assert.ok(section.paragraphs?.length > 0)
      }
    }
  }

  assert.equal(en.privacy.sections.length, 20)
  assert.ok(en.terms.sections.length >= 22)
})
