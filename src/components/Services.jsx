import React from 'react';
import { GraduationCap, Users, Layout, Check, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: 'Formação em Programação',
      description: 'Cursos práticos em HTML, CSS, JavaScript, React, Node.js e muito mais. Do zero ao profissional.',
      items: ['Lógica de programação', 'Desenvolvimento Web', 'Projectos práticos'],
      popular: false
    },
    {
      icon: Users,
      title: 'Mentoria Personalizada',
      description: 'Acompanhamento individual para acelerar sua evolução. Plano de estudos, code review e suporte contínuo.',
      items: ['Sessões 1-a-1', 'Plano personalizado', 'Suporte via WhatsApp'],
      popular: true
    },
    {
      icon: Layout,
      title: 'Desenvolvimento Web',
      description: 'Sites profissionais, sistemas de gestão e soluções web sob medida para o seu negócio.',
      items: ['Sites institucionais', 'Sistemas de gestão', 'Landing pages'],
      popular: false
    }
  ];

  return (
    <section id="services" className="relative py-24">
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: 'radial-gradient(ellipse at center, rgba(15, 61, 46, 0.15), transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="reveal text-center mb-16">
          <span className="text-accent-glow text-sm font-semibold tracking-wider uppercase">
            O que ofereço
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-3">
            Serviços <span className="text-gradient">especializados</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`reveal ${index === 1 ? 'delay-200' : index === 2 ? 'delay-400' : ''} service-card rounded-2xl border p-8 relative`}
              style={{
                background: '#1F1F1F',
                borderColor: service.popular ? 'rgba(22, 163, 74, 0.3)' : undefined
              }}
            >
              {service.popular && (
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: '#16A34A', color: '#0D0D0D' }}
                >
                  Popular
                </div>
              )}

              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(15, 61, 46, 0.3)' }}
              >
                <service.icon size={28} color="#22C55E" />
              </div>

              <h3 className="font-heading text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                    <Check size={14} color="#22C55E" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                style={{ color: '#22C55E' }}
              >
                Saiba mais
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;