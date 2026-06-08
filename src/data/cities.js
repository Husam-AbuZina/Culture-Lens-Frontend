export const cities = {
  hebron: {
    slug: "hebron",
    hero: "/images/HebronMeusuem.jpg",
    gallery: [
      "/images/HebronMeusuem.jpg",
      "/images/IbrahimiMosque.jpg",
      "/images/OldTown.jpg",
    ],
    places: [
      {
        slug: "ibrahimi-mosque",
        image: "/images/IbrahimiMosque.jpg",
        gallery: ["/images/IbrahimiMosque.jpg", "/images/OldTown.jpg"],
      },
      {
        slug: "old-city-market",
        image: "/images/OldTown.jpg",
        gallery: ["/images/OldTown.jpg", "/images/Oil Maker.jpg"],
      },
      {
        slug: "hebron-museum",
        image: "/images/HebronMeusuem.jpg",
        gallery: ["/images/HebronMeusuem.jpg", "/images/OldTown.jpg"],
      },
    ],
  },
  bethlehem: {
    slug: "bethlehem",
    hero: "/images/BethlehemChurch.jpg",
    gallery: [
      "/images/BethlehemChurch.jpg",
      "/images/Churches.jpg",
      "/images/NightChurchBethlehem.jpg",
    ],
    places: [
      {
        slug: "church-of-the-nativity",
        image: "/images/BethlehemChurch.jpg",
        gallery: ["/images/BethlehemChurch.jpg", "/images/NightChurchBethlehem.jpg"],
      },
      {
        slug: "manger-square",
        image: "/images/Churches.jpg",
        gallery: ["/images/Churches.jpg", "/images/BethlehemChurch.jpg"],
      },
      {
        slug: "milk-grotto",
        image: "/images/Churches2.jpg",
        gallery: ["/images/Churches2.jpg", "/images/NightChurchBethlehem.jpg"],
      },
    ],
  },
  jerusalem: {
    slug: "jerusalem",
    hero: "/images/AlAqusa.jpg",
    gallery: [
      "/images/AlAqusa.jpg",
      "/images/AlAqusa2.JPG",
      "/images/OldTing.jpg",
    ],
    places: [
      {
        slug: "al-aqsa-compound",
        image: "/images/AlAqusa.jpg",
        gallery: ["/images/AlAqusa.jpg", "/images/AlAqusa2.JPG"],
      },
      {
        slug: "old-city-alleys",
        image: "/images/OldTing.jpg",
        gallery: ["/images/OldTing.jpg", "/images/OldTown.jpg"],
      },
      {
        slug: "old-city-walls",
        image: "/images/Acre.jpg",
        gallery: ["/images/Acre.jpg", "/images/OldTing.jpg"],
      },
    ],
  },
}

export const getCity = (slug) => cities[slug?.toLowerCase()]

export const getAllCities = () => Object.values(cities)

export function getPlace(slug) {
  for (const city of getAllCities()) {
    const place = city.places.find((item) => item.slug === slug)
    if (place) return { ...place, city }
  }
  return undefined
}
