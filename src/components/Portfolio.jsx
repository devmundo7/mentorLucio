import React from 'react';
import { ShoppingCart, BarChart3, Smartphone } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      icon: ShoppingCart,
      title: 'E-Commerce Platform',
      description: 'Loja online completa com painel admin',
      tags: ['React', 'Node.js'],
      gradient: 'linear-gradient(135deg, #0F3D2E, #1F1F1F)'
    },
    {
      icon: BarChart3,
      title: 'Dashboard Analytics',
      description: 'Painel de gestão com gráficos em tempo real',
      tags: ['Vue.js', 'Firebase'],
      gradient: 'linear-gradient(135deg, #14532D, #1F1F1F)'
    },
    {
      icon: Smartphone,
      title: 'App de Gestão',
      description: 'Sistema de gestão para PMEs',
      tags: ['Next.js', 'PostgreSQL'],
      gradient: 'linear-gradient(135deg, #0F3D2E, #0D0D0D)'
    }
  ];

  return (
    <section id="portfolio" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <span className="text-accent-glow text-sm font-semibold tracking-wider uppercase">
            Trabalhos recentes
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-3">
            Portfólio <span className="text-gradient">seleccionado</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`reveal ${index === 1 ? 'delay-200' : index === 2 ? 'delay-400' : ''} portfolio-card rounded-2xl border border-dark-600 overflow-hidden group`}
              style={{ background: '#1F1F1F' }}
            >
              <div
                className="aspect-video relative"
                style={{ background: project.gradient }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon size={48} color="rgba(34, 197, 94, 0.4)" />
                </div>
                <div className="portfolio-overlay absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 transition-opacity">
                  <span
                    className="px-4 py-2 rounded-full text-sm font-semibold"
                    style={{ background: '#16A34A', color: '#0D0D0D' }}
                  >
                    Ver detalhes
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-heading font-bold mb-1">{project.title}</h3>
                <p className="text-gray-500 text-sm">{project.description}</p>
                <div className="flex gap-2 mt-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-xs"
                      style={{ background: 'rgba(15, 61, 46, 0.3)', color: '#22C55E' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;