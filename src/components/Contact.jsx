import React, { useState } from 'react';
import { MessageCircle, Mail, Clock, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ============================================
// CONFIGURE AQUI SUAS CREDENCIAIS DO EMAILJS
// ============================================
const EMAILJS_PUBLIC_KEY = 'nxAZT4AY2J6DrafC1';
const EMAILJS_SERVICE_ID = 'qwertyuiop';
const EMAILJS_TEMPLATE_ID = 'template_a87de3p';
// ============================================

const Contact = ({ config }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success'); // 'success' ou 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Previne múltiplos envios
    if (isSubmitting) return;
    
    setIsSubmitting(true);

    try {
      // Preparar os dados para o template do EmailJS
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
        date: new Date().toLocaleString('pt-BR', {
          dateStyle: 'full',
          timeStyle: 'short'
        })
      };

      // Enviar email via EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        // Sucesso
        setToastMessage('✓ Mensagem enviada com sucesso! Entraremos em contacto em breve.');
        setToastType('success');
        setShowToast(true);
        
        // Limpar formulário
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      
      // Erro
      setToastMessage('❌ Erro ao enviar mensagem. Tente novamente ou use o WhatsApp.');
      setToastType('error');
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
      
      // Esconder toast após 5 segundos
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <span className="text-accent-glow text-sm font-semibold tracking-wider uppercase">Contacto</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-3 text-white">
            Vamos <span className="text-gradient">conversar</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="reveal space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(15, 61, 46, 0.3)' }}>
                <MessageCircle size={22} color="#22C55E" />
              </div>
              <div>
                <h3 className="font-heading font-bold mb-1 text-white">WhatsApp</h3>
                <p className="text-gray-400 text-sm">{config.whatsapp_number}</p>
                <p className="text-gray-600 text-xs mt-1">Resposta em até 2 horas</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(15, 61, 46, 0.3)' }}>
                <Mail size={22} color="#22C55E" />
              </div>
              <div>
                <h3 className="font-heading font-bold mb-1 text-white">Email</h3>
                <p className="text-gray-400 text-sm">{config.email_address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(15, 61, 46, 0.3)' }}>
                <Clock size={22} color="#22C55E" />
              </div>
              <div>
                <h3 className="font-heading font-bold mb-1 text-white">Horário</h3>
                <p className="text-gray-400 text-sm">Seg - Sex: 09:00 - 18:00</p>
              </div>
            </div>

            <div className="pt-6 border-t border-dark-700">
              <p className="text-gray-500 text-sm mb-4">Siga nas redes sociais</p>
              <div className="flex gap-3">
                <a href="https://github.com/cangadev" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl border border-dark-600 flex items-center justify-center text-gray-400 hover:text-accent-glow transition-all" style={{ background: '#1F1F1F' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/lucio-jose7/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl border border-dark-600 flex items-center justify-center text-gray-400 hover:text-accent-glow transition-all" style={{ background: '#1F1F1F' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/lucio_jose7/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl border border-dark-600 flex items-center justify-center text-gray-400 hover:text-accent-glow transition-all" style={{ background: '#1F1F1F' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="https://twitter.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl border border-dark-600 flex items-center justify-center text-gray-400 hover:text-accent-glow transition-all" style={{ background: '#1F1F1F' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.3 9 4-.7-3 2-6 5-5.6 1.2.1 2.3.5 3.3 1.1 1.5-.3 2.8-.7 4-1.3-.5 1.7-1.7 3-3 3.5 1.4 0 2.7-.5 3.7-1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="reveal">
            <form onSubmit={handleSubmit} className="rounded-2xl border border-dark-600 p-8 space-y-5" style={{ background: '#1F1F1F' }}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name} 
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                  placeholder="Seu nome completo" 
                  className="w-full px-4 py-3 rounded-xl border border-dark-600 text-white placeholder-gray-600 text-sm disabled:opacity-50" 
                  style={{ background: '#0D0D0D' }} 
                  required 
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email} 
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                  placeholder="seu@email.com" 
                  className="w-full px-4 py-3 rounded-xl border border-dark-600 text-white placeholder-gray-600 text-sm disabled:opacity-50" 
                  style={{ background: '#0D0D0D' }} 
                  required 
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  value={formData.message} 
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                  placeholder="Como posso ajudar?" 
                  className="w-full px-4 py-3 rounded-xl border border-dark-600 text-white placeholder-gray-600 text-sm resize-none disabled:opacity-50" 
                  style={{ background: '#0D0D0D' }} 
                  required 
                  disabled={isSubmitting}
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" 
                style={{ 
                  background: isSubmitting ? '#333' : config.primary_action_color, 
                  color: '#0D0D0D' 
                }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Enviar mensagem
                  </>
                )}
              </button>
              <div 
                className={`toast rounded-xl p-4 text-sm font-medium text-center ${showToast ? 'show' : 'hidden'}`} 
                style={{ 
                  background: toastType === 'success' ? 'rgba(15, 61, 46, 0.3)' : 'rgba(220, 38, 38, 0.2)', 
                  color: toastType === 'success' ? '#22C55E' : '#EF4444' 
                }}
              >
                {toastMessage}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;