// All images must exist in /public/images (case-sensitive)
export const cities = {
    hebron: {
      slug: "hebron",
      name: "Hebron",
      hero: "/images/HebronMeusuem.jpg",
      summary:
        "Hebron is one of the oldest continuously inhabited cities. Explore its heritage, markets, and historic architecture.",
      gallery: [
        "/images/HebronMeusuem.jpg",
        "/images/IbrahimiMosque.jpg",
        "/images/OldTown.jpg",
      ],
      places: [
        {
          title: "Ibrahimi Mosque",
          img: "/images/IbrahimiMosque.jpg",
          desc:
            "A sacred site with deep religious and historical significance, featuring Mamluk and Ottoman-era details."
        },
        {
          title: "Old City Market",
          img: "/images/OldTown.jpg",
          desc:
            "Traditional souq with artisans, glassblowers, and spices across narrow stone alleys."
        },
        {
          title: "Hebron Museum",
          img: "/images/HebronMeusuem.jpg",
          desc:
            "Archival artifacts and exhibitions that narrate Hebron’s cultural evolution."
        }
      ]
    },
    bethlehem: {
      slug: "bethlehem",
      name: "Bethlehem",
      hero: "/images/BethlehemChurch.jpg",
      summary:
        "Bethlehem blends ancient heritage with vibrant local life. Iconic churches, old quarters, and crafts.",
      gallery: [
        "/images/BethlehemChurch.jpg",
        "/images/Churches.jpg",
        "/images/Churches2.jpg",
      ],
      places: [
        {
          title: "Nativity Church",
          img: "/images/BethlehemChurch.jpg",
          desc:
            "A UNESCO World Heritage site and one of the oldest surviving Christian churches."
        },
        {
          title: "Manger Square",
          img: "/images/Churches.jpg",
          desc:
            "Historic plaza surrounded by landmarks, cafés, and cultural events."
        },
        {
          title: "Milk Grotto",
          img: "/images/Churches2.jpg",
          desc:
            "A serene chapel with centuries of local lore and pilgrimage tradition."
        }
      ]
    },
    jerusalem: {
      slug: "jerusalem",
      name: "Jerusalem",
      hero: "/images/AlAqusa.jpg",
      summary:
        "A mosaic of cultures and faiths. Wander its quarters, walls, gates, and ancient streets.",
      gallery: [
        "/images/AlAqusa.jpg",
        "/images/OldTown.jpg",
        "/images/Acre.jpg"
      ],
      places: [
        {
          title: "Al-Aqsa Compound",
          img: "/images/AlAqusa.jpg",
          desc:
            "A sacred plateau with centuries of craftsmanship, domes, and courtyards."
        },
        {
          title: "Old City Alleys",
          img: "/images/OldTown.jpg",
          desc:
            "Stone-paved passages linking souqs, homes, and shrines within the walls."
        },
        {
          title: "City Walls & Gates",
          img: "/images/Acre.jpg",
          desc:
            "Fortifications and portals that frame the old city’s living history."
        }
      ]
    }
  }
  
  export const getCity = (slug) => cities[slug?.toLowerCase()]
  