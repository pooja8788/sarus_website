import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import ImageCarousel from './components/ImageCarousel';
import InnovationSection from './components/InnovationSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import Anant from './components/Anant';
import AboutUs from './components/AboutUs';
import KisanDrone from './components/KisanDrone';
import Torna from "./components/Torna";
import ProductsPage from "./components/ProductsPage"

const Home = () => (
  <>
    <Header />
    <HeroSection />
    <ProductGrid />
    <ImageCarousel />
    <InnovationSection />
    <ServicesSection />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/anant" element={<Anant />} />
           <Route path="/kisan-drone" element={<KisanDrone />} />
           <Route path="/torna" element={<Torna />} />
           <Route path="/ProductsPage" element={<ProductsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
