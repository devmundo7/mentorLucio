import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const intervalRef = useRef(null);
  const carouselRef = useRef(null);

  const testimonials = [
    {
      text: '"A mentoria mudou completamente minha visão sobre programação. Em 3 meses, já estava a trabalhar como freelancer!"',
      initials: 'MK',
      name: 'Mateus Kapaça',
      role: 'Frontend Developer'
    },
    {
      text: '"O sistema web que o Mentor Lúcio desenvolveu para a minha empresa superou todas as expectativas. Profissionalismo total!"',
      initials: 'CS',
      name: 'Carlos Santos',
      role: 'CEO, TechStart'
    },
    {
      text: '"Comecei do zero absoluto e hoje programo com confiança. O método de ensino é incrível, sempre prático e directo."',
      initials: 'MC',
      name: 'Maria Catombela',
      role: 'Estudante de Engenharia'
    },
    {
      text: '"O Mentor Lúcio tem uma didática excepcional. Consegui meu primeiro emprego como dev em apenas 4 meses de mentoria!"',
      initials: 'JP',
      name: 'João Pedro',
      role: 'Backend Developer'
    },
    {
      text: '"Profissional extremamente competente. Entregou nosso projeto antes do prazo e com qualidade acima do esperado."',
      initials: 'AF',
      name: 'Ana Ferreira',
      role: 'Product Manager'
    }
  ];

  // Navegação automática estilo marquee
  useEffect(() => {
    if (isPlaying && !isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000); // Muda a cada 4 segundos
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, isHovered, testimonials.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Touch events para mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      handleNext();
    }
    if (touchStart - touchEnd < -50) {
      // Swipe right
      handlePrevious();
    }
  };

  // Calcular índices para efeito de carrossel infinito
  const getVisibleTestimonials = () => {
    const items = [];
    const total = testimonials.length;
    
    // Para desktop, mostra 3 cards
    for (let i = -1; i <= 1; i++) {
      let index = (currentIndex + i + total) % total;
      items.push({
        ...testimonials[index],
        position: i,
        isCenter: i === 0,
        index
      });
    }
    return items;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: 'radial-gradient(ellipse at bottom, rgba(15, 61, 46, 0.15), transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="reveal text-center mb-16">
          <span className="text-accent-glow text-sm font-semibold tracking-wider uppercase">
            Feedback
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-3 text-white">
            O que dizem os <span className="text-gradient">alunos</span>
          </h2>
        </div>

        {/* Carrossel Desktop - Efeito Marquee */}
        <div 
          className="hidden md:block relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            ref={carouselRef}
            className="relative h-[400px] overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative w-full h-full flex items-center">
              {visibleTestimonials.map((testimonial, idx) => {
                const isCenter = testimonial.position === 0;
                const translateX = testimonial.position * 100;
                
                return (
                  <div
                    key={`${testimonial.index}-${idx}`}
                    className="absolute w-full transition-all duration-700 ease-out px-4"
                    style={{
                      transform: `translateX(${translateX}%)`,
                      opacity: isCenter ? 1 : 0.3,
                      scale: isCenter ? 1 : 0.85,
                      zIndex: isCenter ? 10 : 1,
                      filter: isCenter ? 'none' : 'blur(1px)',
                      pointerEvents: isCenter ? 'auto' : 'none'
                    }}
                  >
                    <div 
                      className="testimonial-card rounded-2xl border border-dark-600 p-8 max-w-md mx-auto"
                      style={{ background: '#1F1F1F' }}
                    >
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} color="#FBBF24" fill="#FBBF24" />
                        ))}
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {testimonial.text}
                      </p>

                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-base"
                          style={{ background: 'rgba(15, 61, 46, 0.3)', color: '#22C55E' }}
                        >
                          {testimonial.initials}
                        </div>
                        <div>
                          <div className="font-semibold text-base text-white">
                            {testimonial.name}
                          </div>
                          <div className="text-gray-500 text-xs">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controles Desktop */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
            <button
              onClick={togglePlayPause}
              className="w-10 h-10 rounded-full bg-dark-800/80 backdrop-blur-sm border border-dark-600 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
          </div>

          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-dark-800/80 backdrop-blur-sm border border-dark-600 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300 z-20"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-dark-800/80 backdrop-blur-sm border border-dark-600 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300 z-20"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicadores (Dots) */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-accent-glow' 
                    : 'w-2 bg-dark-600 hover:bg-dark-500'
                }`}
                aria-label={`Ver testemunho ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Versão Mobile - Cards empilhados com swipe */}
        <div className="md:hidden">
          <div 
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div 
                      className="testimonial-card rounded-2xl border border-dark-600 p-6"
                      style={{ background: '#1F1F1F' }}
                    >
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} color="#FBBF24" fill="#FBBF24" />
                        ))}
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {testimonial.text}
                      </p>

                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                          style={{ background: 'rgba(15, 61, 46, 0.3)', color: '#22C55E' }}
                        >
                          {testimonial.initials}
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-white">
                            {testimonial.name}
                          </div>
                          <div className="text-gray-500 text-xs">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Controles Mobile */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={handlePrevious}
              className="w-10 h-10 rounded-full bg-dark-800 border border-dark-600 flex items-center justify-center text-white"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button
              onClick={togglePlayPause}
              className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
            
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-dark-800 border border-dark-600 flex items-center justify-center text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots Mobile */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-accent-glow' 
                    : 'w-2 bg-dark-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Indicador de progresso */}
        <div className="hidden md:block mt-6">
          <div className="w-full max-w-md mx-auto h-1 bg-dark-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent-glow rounded-full transition-all duration-300"
              style={{ 
                width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
                transition: isPlaying ? 'width 4s linear' : 'none'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;