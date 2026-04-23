import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = ({ config }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const ctaStyle = { background: config.primary_action_color, color: '#0D0D0D' };
  const titleWords = config.hero_title.split(' ');
  const lastWord = titleWords.pop();

  // Slides do terminal
  const terminalSlides = [
    {
      type: 'code',
      content: (
        <div className="p-6 font-mono text-sm space-y-3">
          <div className="text-gray-500">// Bem-vindo ao Mentor Lúcio</div>
          <div><span className="text-accent-glow">const</span> <span className="text-blue-400">mentor</span> = {'{'}</div>
          <div className="pl-6"><span className="text-yellow-400">nome</span>: <span className="text-orange-300">"Mentor Lúcio"</span>,</div>
          <div className="pl-6"><span className="text-yellow-400">skills</span>: [<span className="text-orange-300">"Web"</span>, <span className="text-orange-300">"Mobile"</span>, <span className="text-orange-300">"Cloud"</span>],</div>
          <div className="pl-6"><span className="text-yellow-400">missão</span>: <span className="text-orange-300">"Transformar vidas"</span>,</div>
          <div className="pl-6"><span className="text-yellow-400">disponível</span>: <span className="text-accent-glow">true</span></div>
          <div>{'};'}</div>
          <div className="mt-4 flex items-center"><span className="text-accent-glow mr-2">❯</span> <span className="terminal-line text-gray-300">mentor.iniciarJornada()</span></div>
          <div className="text-accent-glow mt-2">✓ Carreira transformada com sucesso!</div>
        </div>
      )
    },
    {
      type: 'image',
      content: (
        <div className="p-6 flex flex-col items-center justify-center h-full">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-accent-glow animate-pulse-glow mb-4">
            <img 
              src="/images/mentor-lucio.jpg" 
              alt="Mentor Lúcio"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback se a imagem não existir
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `
                  <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent to-accent-dark">
                    <span class="text-6xl font-bold text-white">ML</span>
                  </div>
                `;
              }}
            />
          </div>
          <h3 className="font-heading text-xl font-bold text-white mb-2">Lúcio José</h3>
          <p className="text-accent-glow text-sm font-medium mb-3">Full Stack Developer & Mentor</p>
          <div className="flex gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent-glow">+5 Anos</span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent-glow">150+ Alunos</span>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-400 text-xs">"Transformando vidas através da tecnologia"</p>
          </div>
        </div>
      )
    },
    {
      type: 'code',
      content: (
        <div className="p-6 font-mono text-sm space-y-3">
          <div className="text-gray-500">// Stack principal</div>
          <div><span className="text-accent-glow">const</span> <span className="text-blue-400">techStack</span> = {'{'}</div>
          <div className="pl-6"><span className="text-yellow-400">frontend</span>: [<span className="text-orange-300">"React"</span>, <span className="text-orange-300">"Vue"</span>, <span className="text-orange-300">"Tailwind"</span>],</div>
          <div className="pl-6"><span className="text-yellow-400">backend</span>: [<span className="text-orange-300">"Node.js"</span>, <span className="text-orange-300">"Python"</span>, <span className="text-orange-300">"PHP"</span>],</div>
          <div className="pl-6"><span className="text-yellow-400">database</span>: [<span className="text-orange-300">"PostgreSQL"</span>, <span className="text-orange-300">"MongoDB"</span>],</div>
          <div className="pl-6"><span className="text-yellow-400">devops</span>: [<span className="text-orange-300">"Docker"</span>, <span className="text-orange-300">"AWS"</span>]</div>
          <div>{'};'}</div>
          <div className="mt-4"><span className="text-accent-glow">console</span>.<span className="text-yellow-400">log</span>(<span className="text-orange-300">"Pronto para codar!"</span>);</div>
          <div className="flex items-center mt-2"><span className="text-accent-glow mr-2">❯</span> <span className="terminal-line text-gray-300">mentor.build()</span></div>
          <div className="text-accent-glow mt-2">✓ Build completo! 🚀</div>
        </div>
      )
    }
  ];

  // Indicadores de slide (bolinhas)
  const indicators = [
    { icon: '💻', label: 'Código' },
    { icon: '👤', label: 'Perfil' },
    { icon: '⚡', label: 'Stack' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % terminalSlides.length);
        setIsTyping(true);
      }, 300);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{ background: '#0F3D2E' }} />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: '#16A34A' }} />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dark-600 mb-6" style={{ background: 'rgba(31, 31, 31, 0.6)' }}>
            <span className="w-2 h-2 rounded-full bg-accent-glow animate-pulse" />
            <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">Disponível para novos projectos</span>
          </div>

          <h1 className="animate-fade-up delay-100 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: '#FFFFFF' }}>
            {titleWords.join(' ')} <span className="text-gradient">{lastWord}</span>
          </h1>

          <p className="animate-fade-up delay-200 text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">{config.hero_subtitle}</p>

          <div className="animate-fade-up delay-300 flex flex-wrap gap-4">
            <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300" style={ctaStyle}>
              Começar agora <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border transition-all duration-300 hover:bg-dark-700" style={{ borderColor: '#333', color: '#fff' }}>
              Ver serviços
            </a>
          </div>

          <div className="animate-fade-up delay-400 flex gap-8 mt-12 pt-8 border-t border-dark-700">
            {[{ value: '150+', label: 'Alunos formados' }, { value: '50+', label: 'Projectos entregues' }, { value: '5+', label: 'Anos experiência' }].map((stat, i) => (
              <div key={i}>
                <div className="stat-number font-heading text-2xl font-bold" style={{ color: '#FFFFFF' }}>{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Dinâmico */}
        <div className="animate-fade-up delay-500 hidden lg:block">
          <div className="animate-float rounded-2xl border border-dark-600 overflow-hidden shadow-2xl" style={{ background: '#1F1F1F' }}>
            {/* Header do Terminal */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-dark-700">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-gray-500 font-mono">
                {terminalSlides[currentSlide].type === 'code' ? 'mentor-tech ~ main' : 'mentor-tech ~ profile'}
              </span>
              <div className="w-16"></div>
            </div>

            {/* Conteúdo Dinâmico */}
            <div 
              key={currentSlide}
              className={`transition-all duration-300 ${isTyping ? 'opacity-100' : 'opacity-0'}`}
              style={{ minHeight: '320px' }}
            >
              {terminalSlides[currentSlide].content}
            </div>

            {/* Indicadores de Slide */}
            <div className="flex justify-center gap-3 py-3 border-t border-dark-700">
              {indicators.map((indicator, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsTyping(false);
                    setTimeout(() => {
                      setCurrentSlide(index);
                      setIsTyping(true);
                    }, 300);
                  }}
                  className="group relative"
                >
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-accent text-white scale-110' 
                        : 'bg-dark-700 text-gray-500 hover:bg-dark-600'
                    }`}
                  >
                    <span className="text-sm">{indicator.icon}</span>
                  </div>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {indicator.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Estilos adicionais para animação */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;