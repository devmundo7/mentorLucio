import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X } from 'lucide-react';

const Navbar = ({ config }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para scroll suave
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileMenuOpen(false);
  };

  const navStyle = {
    background: 'rgba(13, 13, 13, 0.8)',
    backdropFilter: 'blur(20px)',
    borderBottom: scrolled ? '1px solid rgba(51, 51, 51, 0.5)' : 'none'
  };

  const navCtaStyle = {
    background: `${config.primary_action_color}33`,
    color: config.secondary_action_color
  };

  const links = [
    { name: 'Sobre', id: 'about' },
    { name: 'Serviços', id: 'services' },
    { name: 'Portfólio', id: 'portfolio' },
    { name: 'Depoimentos', id: 'testimonials' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 transition-all duration-300" style={navStyle}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
              <Terminal size={18} color="#22C55E" />
            </div>
            <span className="font-heading font-bold text-lg" style={{ color: '#FFFFFF' }}>
              Mentor<span className="text-gradient">Lúcio</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                onClick={(e) => scrollToSection(e, link.id)}
                className="nav-link text-sm text-gray-300 hover:text-white transition-colors"
                style={{ color: '#D1D5DB' }}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300" 
              style={navCtaStyle}
            >
              Contacto
            </a>
          </div>

          <button onClick={() => setMobileMenuOpen(true)} className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`mobile-menu fixed top-0 right-0 bottom-0 w-72 z-50 p-8 flex flex-col gap-6 ${mobileMenuOpen ? 'open' : ''}`} 
        style={{ background: '#1F1F1F' }}
      >
        <button onClick={() => setMobileMenuOpen(false)} className="self-end text-gray-400 hover:text-white">
          <X size={24} />
        </button>
        {[...links, { name: 'Contacto', id: 'contact' }].map(link => (
          <a 
            key={link.id} 
            href={`#${link.id}`} 
            onClick={(e) => scrollToSection(e, link.id)}
            className="text-lg text-gray-300 hover:text-white py-2 border-b border-dark-700"
            style={{ color: '#D1D5DB' }}
          >
            {link.name}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;