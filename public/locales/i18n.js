import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { LOCALS } from './locales';

// Імпортуємо переклади для кожної мови
import en from './en/translation.json';
import uk from './uk/translation.json';
import ru from './ru/translation.json';

const resources = {
  [LOCALS.EN]: {
    translation: en
  },
  [LOCALS.UK]: {
    translation: uk
  },
  [LOCALS.RU]: {
    translation: ru
  }
};

i18n
  .use(Backend) 
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    resources,
    fallbackLng: 'en',
    lng: LOCALS.EN,

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;