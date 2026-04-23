import React from 'react';
import { Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-dark-700 py-12" style={{ background: '#0D0D0D' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <Terminal size={16} color="#22C55E" />
              </div>
              <span className="font-heading font-bold">
                Mentor<span className="text-gradient">Tech</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Transformando carreiras através da tecnologia e mentoria personalizada.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Links rápidos</h4>
            <div className="space-y-2">
              {['Sobre', 'Serviços', 'Portfólio', 'Contacto'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-500 text-sm hover:text-accent-glow transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Serviços</h4>
            <div className="space-y-2">
              {['Formação', 'Mentoria', 'Desenvolvimento Web'].map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="block text-gray-500 text-sm hover:text-accent-glow transition-colors"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-dark-700 pt-6 text-center">
          <p className="text-gray-600 text-xs">
            © 2024 Mentor Lúcio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;