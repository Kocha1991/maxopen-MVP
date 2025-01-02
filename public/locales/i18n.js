import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { LOCALS } from './locales';

// Імпортуємо переклади для кожної мови
import en from './en/translation.json';
import uk from './uk/translation.json';
import ru from './ru_UA/translation.json';

// Перевіряємо, чи i18n вже ініціалізовано
// Це важливо для Next.js, щоб уникнути повторної ініціалізації при серверному рендерингу
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      resources: {
        [LOCALS.EN]: {
          translation: en
        },
        [LOCALS.UK]: {
          translation: uk
        },
        [LOCALS.RU]: {
          translation: ru
        }
      },
      fallbackLng: LOCALS.EN, // Мова за замовчуванням
      
      detection: {
        order: ['path', 'localStorage'], // Спочатку перевіряємо URL, потім localStorage
        lookupFromPathIndex: 0,
        caches: ['localStorage']
      },

      interpolation: {
        escapeValue: false
      }
    });
}

export default i18n;
