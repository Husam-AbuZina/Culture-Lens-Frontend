import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { getAllCities, getPlace } from "../src/data/cities.js"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const readJson = (file) => JSON.parse(fs.readFileSync(path.join(root, file), "utf8"))

test("every city and place has valid linked data and local images", () => {
  const slugs = new Set()

  for (const city of getAllCities()) {
    assert.ok(city.slug)
    assert.ok(fs.existsSync(path.join(root, "public", city.hero)))

    for (const place of city.places) {
      assert.ok(place.slug)
      assert.ok(!slugs.has(place.slug), `duplicate place slug: ${place.slug}`)
      slugs.add(place.slug)
      assert.equal(getPlace(place.slug)?.city.slug, city.slug)
      assert.ok(fs.existsSync(path.join(root, "public", place.image)))
      for (const image of place.gallery) {
        assert.ok(fs.existsSync(path.join(root, "public", image)), `missing image: ${image}`)
      }
    }
  }
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

test("all active city and place translations exist", () => {
  for (const locale of ["en", "ar"]) {
    const translations = readJson(`src/locales/${locale}/common.json`)
    for (const city of getAllCities()) {
      assert.ok(translations.cities[city.slug]?.name)
      assert.ok(translations.cities[city.slug]?.summary)
      for (const place of city.places) {
        assert.ok(translations.places[place.slug]?.name)
        assert.ok(translations.places[place.slug]?.longDescription)
      }
    }
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
