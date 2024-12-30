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

// Функція для отримання мови з localStorage або параметрів URL
const getInitialLanguage = () => {
  // Отримуємо мову з URL (перший параметр шляху)
  const langFromUrl = window.location.pathname.split('/')[1];

  // Перевіряємо, чи зберігалася мова в localStorage
  const savedLanguage = localStorage.getItem('language');

  if (langFromUrl && resources[langFromUrl]) {
    // Якщо мова є в URL, використовуємо її
    return langFromUrl;
  } else if (savedLanguage && resources[savedLanguage]) {
    // Якщо мова є в localStorage, використовуємо її
    return savedLanguage;
  } else {
    // Якщо немає мови в URL або localStorage, за замовчуванням англійська
    return LOCALS.EN;
  }
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    resources,
    fallbackLng: LOCALS.EN,
    lng: getInitialLanguage(), // Встановлюємо початкову мову через нашу функцію

    interpolation: {
      escapeValue: false // React already safes from XSS
    }
  });

export default i18n;
