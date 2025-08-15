import React from "react"
import { Routes, Route } from "react-router-dom"
import ScrollToTop from "./ScrollToTop.jsx"

import Navbar from "./components/Navbar/Navbar.jsx"
import Hero from "./components/Hero/Hero.jsx"
import Cities from "./components/Cities/Cities.jsx"
import Heritage from "./components/Heritage/Heritage.jsx"
import Products from "./components/Products/Products.jsx"
import HashtagWall from "./components/HashtagWall/HashtagWall.jsx"
import Footer from "./components/Footer/Footer.jsx"
import CityDetails from "./components/CityDetails/CityDetails.jsx"
import About from "./components/About/About.jsx"
import Contact from "./components/Contact/Contact.jsx"


function Home(){
  return (
    <>
      <main>
        <Hero />
        <Cities />
        <Heritage />
        <Products />
        <HashtagWall />
      </main>
      <Footer />
    </>
  )
}

export default function App(){
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/city/:slug" element={<CityDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
