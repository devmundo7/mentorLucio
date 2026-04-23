import React from 'react';
import { X } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
  const links = [
    { href: '#about', text: 'Sobre' },
    { href: '#services', text: 'Serviços' },
    { href: '#portfolio', text: 'Portfólio' },
    { href: '#testimonials', text: 'Depoimentos' },
    { href: '#contact', text: 'Contacto' }
  ];

  return (
    <div
      className={`mobile-menu fixed top-0 right-0 bottom-0 w-72 z-50 p-8 flex flex-col gap-6 ${
        isOpen ? 'open' : ''
      }`}
      style={{ background: '#1F1F1F' }}
    >
      <button
        onClick={onClose}
        className="self-end text-gray-400 hover:text-white"
        aria-label="Fechar menu"
      >
        <X size={24} />
      </button>

      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onClose}
          className="mobile-link text-lg text-gray-300 hover:text-white py-2 border-b border-dark-700"
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default MobileMenu;