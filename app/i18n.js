import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Ініціалізація i18n
i18n
  .use(HttpBackend) // Завантаження перекладів із файлів
  .use(LanguageDetector) // Автоматичне визначення мови
  .use(initReactI18next) // Інтеграція з React
  .init({
    fallbackLng: 'en', // Мова за замовчуванням
    debug: true, // Увімкніть для відлагодження
    interpolation: {
      escapeValue: false, // React сам виконує екранування
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Шлях до файлів перекладу
    },
  });

export default i18n;
