import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Maximize2, X } from 'lucide-react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const intervalRef = useRef(null);
  const carouselRef = useRef(null);

  // Array de imagens da galeria
  const galleryImages = [
    {
      id: 1,
      src: '/images/gallery/mentor-1.jpg',
      thumbnail: '/images/gallery/mentor-1.jpg',
      alt: 'Mentor Lúcio - Evento de Empreendedorismo',
      caption: 'Fazendo apresentação do mercado virtual Bomani Shopping',
      category: 'Eventos'
    },
    {
      id: 2,
      src: '/images/gallery/mentor-2.jpg',
      thumbnail: '/images/gallery/mentor-2.jpg',
      alt: 'Mentor Lúcio - Workshop',
      caption: 'Fui nomeado como coordenador para área de programação e base de dados no mundoTec ',
      category: 'Celebração'
    },
    {
      id: 3,
      src: '/images/gallery/mentor-3.jpg',
      thumbnail: '/images/gallery/mentor-3.jpg',
      alt: 'Mentor Lúcio - Mentoria',
      caption: 'Sessão de mentoria com alunos',
      category: 'Mentoria'
    },
    {
      id: 4,
      src: '/images/gallery/mentor-4.jpg',
      thumbnail: '/images/gallery/mentor-4.jpg',
      alt: 'Mentor Lúcio - Coding',
      caption: 'Desenvolvendo soluções',
      category: 'Coding'
    },
    {
      id: 5,
      src: '/images/gallery/mentor-5.jpg',
      thumbnail: '/images/gallery/mentor-5.jpg',
      alt: 'Mentor Lúcio - Conferência',
      caption: 'Cerimonia de Graduação',
      category: 'Eventos'
    },
    {
      id: 6,
      src: '/images/gallery/mentor-6.jpg',
      thumbnail: '/images/gallery/mentor-6.jpg',
      alt: 'Mentor Lúcio - Equipe',
      caption: 'Com a equipe de desenvolvimento',
      category: 'Equipe'
    }
  ];

  // Placeholder melhorado para imagens em falta
  const ImagePlaceholder = ({ index, category }) => (
    <div 
      className="w-full h-full flex flex-col items-center justify-center p-8"
      style={{ 
        background: `linear-gradient(135deg, 
          ${['#0F3D2E', '#14532D', '#1a5c35', '#166534', '#0d4a2a', '#1b6b3f'][index % 6]}, 
          #1F1F1F)`
      }}
    >
      <div className="w-24 h-24 rounded-full bg-accent/30 flex items-center justify-center mb-4 backdrop-blur-sm">
        <span className="text-5xl">
          {category === 'Eventos' ? '🎤' : 
           category === 'Workshops' ? '💻' : 
           category === 'Mentoria' ? '👥' : 
           category === 'Coding' ? '⚡' : '📸'}
        </span>
      </div>
      <h4 className="font-heading text-xl font-bold text-white mb-2">Mentor Lúcio</h4>
      <p className="text-accent-glow text-sm font-medium mb-1">{category}</p>
      <p className="text-gray-400 text-xs text-center max-w-[200px]">
        Imagem em alta resolução • 1080p
      </p>
    </div>
  );

  // Navegação automática
  useEffect(() => {
    if (isPlaying && !isHovered && !lightboxOpen) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
      }, 4000); // 4 segundos para desktop
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, isHovered, lightboxOpen, galleryImages.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    setIsPlaying(false);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setIsPlaying(true);
  };

  const lightboxNext = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const lightboxPrevious = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Calcular imagens visíveis no carrossel
  const getVisibleImages = () => {
    const images = [];
    const total = galleryImages.length;
    
    for (let i = -1; i <= 1; i++) {
      let index = (currentIndex + i + total) % total;
      images.push({
        ...galleryImages[index],
        position: i,
        isCenter: i === 0,
        index
      });
    }
    return images;
  };

  const visibleImages = getVisibleImages();

  return (
    <>
      <section id="gallery" className="relative py-24 overflow-hidden">
        {/* Background decorativo */}
        <div 
          className="absolute inset-0 opacity-30" 
          style={{ background: 'radial-gradient(ellipse at center, rgba(15, 61, 46, 0.15), transparent 70%)' }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Cabeçalho */}
          <div className="reveal text-center mb-16">
            <span className="text-accent-glow text-sm font-semibold tracking-wider uppercase">
              Momentos
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3" style={{ color: '#FFFFFF' }}>
              Minha <span className="text-gradient">Galeria</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Conheça alguns momentos especiais da minha jornada como mentor e desenvolvedor
            </p>
          </div>

          {/* Carrossel Principal - Versão Desktop Melhorada */}
          <div className="reveal delay-200 relative hidden lg:block">
            <div 
              ref={carouselRef}
              className="relative h-[600px] overflow-hidden rounded-3xl border border-dark-600 shadow-2xl"
              style={{ background: '#0D0D0D' }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Container do Carrossel */}
              <div className="relative w-full h-full">
                {visibleImages.map((image, idx) => {
                  const isCenter = image.position === 0;
                  const translateX = image.position * 100;
                  
                  return (
                    <div
                      key={`${image.id}-${idx}`}
                      className="absolute w-full h-full transition-all duration-700 ease-out cursor-pointer"
                      style={{
                        transform: `translateX(${translateX}%)`,
                        opacity: isCenter ? 1 : 0.3,
                        scale: isCenter ? 1 : 0.85,
                        zIndex: isCenter ? 10 : 1,
                        pointerEvents: isCenter ? 'auto' : 'none',
                        filter: isCenter ? 'none' : 'blur(2px)'
                      }}
                      onClick={() => isCenter && openLightbox(image.index)}
                    >
                      <div className="relative w-full h-full p-4">
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group">
                          {/* Imagem com object-fit cover para manter proporção */}
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            style={{ objectPosition: 'center 30%' }}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              const parent = e.target.parentElement;
                              const placeholder = document.createElement('div');
                              placeholder.className = 'w-full h-full';
                              placeholder.innerHTML = `<div class="w-full h-full">${ImagePlaceholder({ index: image.index, category: image.category }).props.children}</div>`;
                              parent.appendChild(placeholder);
                            }}
                          />
                          
                          {/* Botão de expandir */}
                          {isCenter && (
                            <button 
                              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-accent hover:border-accent"
                              onClick={(e) => {
                                e.stopPropagation();
                                openLightbox(image.index);
                              }}
                            >
                              <Maximize2 size={18} />
                            </button>
                          )}
                          
                          {/* Overlay com informações */}
                          {isCenter && (
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8">
                              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3" 
                                style={{ background: 'rgba(22, 163, 74, 0.3)', color: '#22C55E' }}>
                                {image.category}
                              </span>
                              <p className="text-white font-bold text-xl mb-1">{image.caption}</p>
                              <p className="text-gray-300 text-sm">{image.alt}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Controles do Carrossel */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
                <button
                  onClick={togglePlayPause}
                  className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300"
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>
              </div>

              {/* Botões de Navegação */}
              <button
                onClick={handlePrevious}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300 z-20 hover:scale-110"
              >
                <ChevronLeft size={28} />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300 z-20 hover:scale-110"
              >
                <ChevronRight size={28} />
              </button>

              {/* Contador de imagens */}
              <div className="absolute top-6 left-6 z-20">
                <div className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
                  <span className="text-white font-semibold">{currentIndex + 1}</span>
                  <span className="text-gray-400"> / {galleryImages.length}</span>
                </div>
              </div>
            </div>

            {/* Indicadores (Dots) */}
            <div className="flex justify-center gap-3 mt-8">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex 
                      ? 'w-10 h-3 bg-accent-glow' 
                      : 'w-3 h-3 bg-dark-600 hover:bg-dark-500'
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Versão Mobile do Carrossel */}
          <div className="reveal delay-200 relative lg:hidden">
            <div 
              className="relative h-[400px] overflow-hidden rounded-2xl border border-dark-600"
              style={{ background: '#0D0D0D' }}
            >
              <div className="relative w-full h-full">
                {visibleImages.map((image, idx) => {
                  const isCenter = image.position === 0;
                  const translateX = image.position * 100;
                  
                  return (
                    <div
                      key={`mobile-${image.id}-${idx}`}
                      className="absolute w-full h-full transition-all duration-500 ease-out"
                      style={{
                        transform: `translateX(${translateX}%)`,
                        opacity: isCenter ? 1 : 0,
                        zIndex: isCenter ? 10 : 1,
                      }}
                    >
                      <div className="relative w-full h-full p-2">
                        <div className="relative w-full h-full rounded-xl overflow-hidden">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                            style={{ objectPosition: 'center 30%' }}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              const parent = e.target.parentElement;
                              const placeholder = document.createElement('div');
                              placeholder.className = 'w-full h-full';
                              placeholder.innerHTML = `<div class="w-full h-full">${ImagePlaceholder({ index: image.index, category: image.category }).props.children}</div>`;
                              parent.appendChild(placeholder);
                            }}
                          />
                          
                          {isCenter && (
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                              <span className="inline-block px-2 py-1 rounded-full text-xs font-medium mb-2" 
                                style={{ background: 'rgba(22, 163, 74, 0.3)', color: '#22C55E' }}>
                                {image.category}
                              </span>
                              <p className="text-white font-semibold">{image.caption}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Controles Mobile */}
              <button
                onClick={handlePrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Dots Mobile */}
            <div className="flex justify-center gap-2 mt-4">
              {galleryImages.map((_, index) => (
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

          {/* Grid de Miniaturas - Melhorado para Desktop */}
          <div className="reveal delay-400 mt-12">
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  onClick={() => {
                    handleDotClick(index);
                    if (window.innerWidth >= 1024) {
                      setTimeout(() => openLightbox(index), 100);
                    }
                  }}
                  className={`relative aspect-[4/5] lg:aspect-square rounded-lg lg:rounded-xl overflow-hidden cursor-pointer group transition-all duration-300 ${
                    index === currentIndex 
                      ? 'ring-2 ring-accent-glow ring-offset-2 ring-offset-dark-900 scale-105 shadow-xl shadow-accent/30' 
                      : 'hover:scale-105'
                  }`}
                >
                  <img
                    src={image.thumbnail || image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ objectPosition: 'center 30%' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const parent = e.target.parentElement;
                      const placeholder = document.createElement('div');
                      placeholder.className = 'w-full h-full';
                      placeholder.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-dark-800">
                        <span class="text-2xl">📸</span>
                      </div>`;
                      parent.appendChild(placeholder);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox para visualização em tela cheia */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-dark-800/80 border border-dark-600 flex items-center justify-center text-white hover:bg-accent transition-all z-10"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>

          <button 
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-dark-800/80 border border-dark-600 flex items-center justify-center text-white hover:bg-accent transition-all"
            onClick={(e) => {
              e.stopPropagation();
              lightboxPrevious();
            }}
          >
            <ChevronLeft size={28} />
          </button>

          <button 
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-dark-800/80 border border-dark-600 flex items-center justify-center text-white hover:bg-accent transition-all"
            onClick={(e) => {
              e.stopPropagation();
              lightboxNext();
            }}
          >
            <ChevronRight size={28} />
          </button>

          <div 
            className="max-w-5xl max-h-[90vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onError={(e) => {
                e.target.style.display = 'none';
                const parent = e.target.parentElement;
                const placeholder = document.createElement('div');
                placeholder.className = 'w-[800px] h-[600px]';
                placeholder.innerHTML = `<div class="w-full h-full">${ImagePlaceholder({ index: lightboxIndex, category: galleryImages[lightboxIndex].category }).props.children}</div>`;
                parent.appendChild(placeholder);
              }}
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2" 
                style={{ background: 'rgba(22, 163, 74, 0.3)', color: '#22C55E' }}>
                {galleryImages[lightboxIndex].category}
              </span>
              <p className="text-white font-semibold text-lg">{galleryImages[lightboxIndex].caption}</p>
              <p className="text-gray-400 text-sm">{lightboxIndex + 1} / {galleryImages.length}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;