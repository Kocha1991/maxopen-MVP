import { createContext } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: { translation: { welcome: "Welcome" } },
    ua: { translation: { welcome: "Ласкаво просимо" } },
    ru: { translation: { welcome: "Добро пожаловать" } },
  },
});

export default i18n;
