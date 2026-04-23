import { useState, useEffect, useRef } from 'react';

export const defaultConfig = {
  background_color: '#0D0D0D',
  surface_color: '#1F1F1F',
  text_color: '#FFFFFF',
  primary_action_color: '#16A34A',
  secondary_action_color: '#22C55E',
  font_family: 'Sora',
  font_size: 16,
  hero_title: 'Transforme sua carreira com tecnologia',
  hero_subtitle: 'Mentoria + Desenvolvimento Web — Aprenda, evolua e construa o futuro que você merece.',
  about_name: 'Lúcio José',
  about_description: 'Desenvolvedor Full Stack com mais de 5 anos de experiência, apaixonado por ensinar e transformar vidas através da tecnologia. Já formei mais de 150 alunos e entreguei dezenas de projectos web de sucesso.',
  cta_text: 'Comece sua jornada hoje',
  whatsapp_number: '+244 941 378 131',
  email_address: 'cangadev7@gmail.com'
};

export const useConfig = () => {
  const [config, setConfig] = useState(defaultConfig);
  const sdkRef = useRef(null);

  useEffect(() => {
    if (window.elementSdk) {
      sdkRef.current = window.elementSdk;
      sdkRef.current.init({
        defaultConfig,
        onConfigChange: async (newConfig) => {
          setConfig(prev => ({ ...prev, ...newConfig }));
        },
        mapToCapabilities: (cfg) => ({
          recolorables: [
            { get: () => cfg.background_color || defaultConfig.background_color, set: (v) => updateConfig('background_color', v) },
            { get: () => cfg.surface_color || defaultConfig.surface_color, set: (v) => updateConfig('surface_color', v) },
            { get: () => cfg.text_color || defaultConfig.text_color, set: (v) => updateConfig('text_color', v) },
            { get: () => cfg.primary_action_color || defaultConfig.primary_action_color, set: (v) => updateConfig('primary_action_color', v) },
            { get: () => cfg.secondary_action_color || defaultConfig.secondary_action_color, set: (v) => updateConfig('secondary_action_color', v) }
          ],
          borderables: [],
          fontEditable: {
            get: () => cfg.font_family || defaultConfig.font_family,
            set: (v) => updateConfig('font_family', v)
          },
          fontSizeable: {
            get: () => cfg.font_size || defaultConfig.font_size,
            set: (v) => updateConfig('font_size', v)
          }
        }),
        mapToEditPanelValues: (cfg) => new Map([
          ['hero_title', cfg.hero_title || defaultConfig.hero_title],
          ['hero_subtitle', cfg.hero_subtitle || defaultConfig.hero_subtitle],
          ['about_name', cfg.about_name || defaultConfig.about_name],
          ['about_description', cfg.about_description || defaultConfig.about_description],
          ['cta_text', cfg.cta_text || defaultConfig.cta_text],
          ['whatsapp_number', cfg.whatsapp_number || defaultConfig.whatsapp_number],
          ['email_address', cfg.email_address || defaultConfig.email_address]
        ])
      });
    }

    const updateConfig = (key, value) => {
      setConfig(prev => {
        const newConfig = { ...prev, [key]: value };
        if (sdkRef.current) {
          sdkRef.current.setConfig({ [key]: value });
        }
        return newConfig;
      });
    };
  }, []);

  return config;
};