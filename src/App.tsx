import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Approach from './components/Approach';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';

function MainPage() {
  return (
    <>
      <Navigation />
      <Hero />
      <PainPoints />
      <Approach />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blog" element={<><Navigation /><Blog /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;