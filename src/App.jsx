import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProductGrid from './components/ProductGrid'
import ImageCarousel from './components/ImageCarousel'
import InnovationSection from './components/InnovationSection'
import ServicesSection from './components/ServicesSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProductGrid />
      <ImageCarousel />
      <InnovationSection />
      <ServicesSection />
      <Footer />
    </div>
  )
}

export default App
