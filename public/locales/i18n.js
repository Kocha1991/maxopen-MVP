'use client';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { LOCALS } from './locales';

// Імпортуємо переклади для кожної мови
import en from './en/translation.json';
import uk from './uk/translation.json';
import ru from './ru_UA/translation.json';

const resources = {
  [LOCALS.EN]: { translation: en },
  [LOCALS.UK]: { translation: uk },
  [LOCALS.RU]: { translation: ru }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: LOCALS.EN,
    lng: LOCALS.EN, // Встановлюємо початкову мову явно
    detection: {
      order: ['path', 'localStorage'],
      lookupFromPathIndex: 0,
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
