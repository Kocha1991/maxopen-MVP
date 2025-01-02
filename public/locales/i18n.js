// public/locales/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
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

const getInitialLanguage = () => {
  const langFromUrl = window.location.pathname.split('/')[1];
  const savedLanguage = localStorage.getItem('language');

  if (langFromUrl && resources[langFromUrl]) {
    return langFromUrl;
  } else if (savedLanguage && resources[savedLanguage]) {
    return savedLanguage;
  } else {
    return LOCALS.EN;
  }
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: LOCALS.EN,
    lng: getInitialLanguage(),
    interpolation: { escapeValue: false }
  });

export default i18n;
