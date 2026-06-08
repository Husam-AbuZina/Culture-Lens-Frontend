import { Route, Routes } from "react-router-dom"
import ScrollToTop from "./ScrollToTop.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"
import Hero from "./components/Hero/Hero.jsx"
import Cities from "./components/Cities/Cities.jsx"
import Heritage from "./components/Heritage/Heritage.jsx"
import HashtagWall from "./components/HashtagWall/HashtagWall.jsx"
import Footer from "./components/Footer/Footer.jsx"
import CityDetails from "./components/CityDetails/CityDetails.jsx"
import PlaceDetails from "./components/PlaceDetails/PlaceDetails.jsx"
import About from "./components/About/About.jsx"
import Contact from "./components/Contact/Contact.jsx"
import CitiesPage from "./pages/CitiesPage/CitiesPage.jsx"
import LegalPage from "./pages/LegalPage/LegalPage.jsx"
import NotFound from "./pages/NotFound/NotFound.jsx"

function Home() {
  return (
    <main>
      <Hero />
      <Cities />
      <Heritage />
      <HashtagWall />
    </main>
  )
}

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cities" element={<CitiesPage />} />
        <Route path="/city/:slug" element={<CityDetails />} />
        <Route path="/place/:slug" element={<PlaceDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<LegalPage type="privacy" />} />
        <Route path="/terms" element={<LegalPage type="terms" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
