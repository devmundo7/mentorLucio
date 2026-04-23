import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { useConfig } from './hooks/useConfig';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  const config = useConfig();
  useScrollReveal();

  useEffect(() => {
    document.body.style.backgroundColor = config.background_color;
    document.body.style.fontFamily = `${config.font_family}, 'DM Sans', sans-serif`;
    document.body.style.fontSize = `${config.font_size}px`;
  }, [config]);

  return (
    <div className="w-full h-full relative">
      <div className="noise-overlay fixed inset-0 pointer-events-none z-50" />
      <div className="grid-bg fixed inset-0 pointer-events-none z-0" />

      <Navbar config={config} />
      <Hero config={config} />
      <About config={config} />
      <Services />
      <Portfolio />
      <Testimonials />
      <CTA config={config} />
      <Gallery />
      <Contact config={config} />
      <Footer />
      <WhatsAppButton phoneNumber={config.whatsapp_number} />
    </div>
  );
}

export default App;