import React from 'react';
import { Rocket, MessageCircle, Mail } from 'lucide-react';

const CTA = ({ config }) => {
  const getTitleHtml = () => {
    const title = config.cta_text;
    const words = title.split(' ');
    const last = words.pop();
    return (
      <>
        {words.join(' ')} <span className="text-gradient">{last}</span>
      </>
    );
  };

  return (
    <section className="relative py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div
          className="reveal rounded-3xl border border-dark-600 p-12 sm:p-16 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1F1F1F, #0D0D0D)' }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-15"
            style={{ background: '#0F3D2E' }}
          />

          <div className="relative z-10">
            <div
              className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
              style={{ background: 'rgba(15, 61, 46, 0.3)' }}
            >
              <Rocket size={32} color="#22C55E" />
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              {getTitleHtml()}
            </h2>

            <p className="text-gray-400 max-w-lg mx-auto mb-8">
              Não espere mais para transformar sua carreira. Entre em contacto e descubra como a tecnologia pode mudar a sua vida.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
                style={{ background: config.primary_action_color, color: '#0D0D0D' }}
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border transition-all duration-300 hover:bg-dark-700"
                style={{ borderColor: '#333', color: '#fff' }}
              >
                <Mail size={18} />
                Enviar email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;