import React from 'react';
import { Code2, Target, Eye } from 'lucide-react';

const About = ({ config }) => {
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div
              className="aspect-square max-w-md mx-auto rounded-3xl border border-dark-600 p-8 flex flex-col justify-center relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #1F1F1F, #0D0D0D)' }}
            >
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-20"
                style={{ background: '#0F3D2E' }}
              />
              <div className="relative z-10 space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center">
                  <Code2 size={36} color="#22C55E" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-2">{config.about_name}</h3>
                  <p className="text-accent-glow text-sm font-medium">Full Stack Developer & Mentor</p>
                </div>
                <div className="flex gap-3">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ background: 'rgba(15, 61, 46, 0.3)', color: '#22C55E' }}
                  >
                    JavaScript
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ background: 'rgba(15, 61, 46, 0.3)', color: '#22C55E' }}
                  >
                    React
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ background: 'rgba(15, 61, 46, 0.3)', color: '#22C55E' }}
                  >
                    Node.js
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ background: 'rgba(15, 61, 46, 0.3)', color: '#22C55E' }}
                  >
                    Python
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-accent-glow text-sm font-semibold tracking-wider uppercase">
              Sobre o Mentor
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-3 mb-6">
              Experiência que <span className="text-gradient">transforma</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">{config.about_description}</p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(15, 61, 46, 0.3)' }}
                >
                  <Target size={16} color="#22C55E" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white">Missão</h4>
                  <p className="text-gray-500 text-sm">
                    Democratizar o acesso ao conhecimento em tecnologia, formando profissionais competentes e confiantes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(15, 61, 46, 0.3)' }}
                >
                  <Eye size={16} color="#22C55E" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white">Visão</h4>
                  <p className="text-gray-500 text-sm">
                    Ser referência em mentoria tech, conectando talento e oportunidade no mundo digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;