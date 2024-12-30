// next.config.js
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'uk', 'ru_UA'],  // Список доступних мов
    defaultLocale: 'en',              // Мова за замовчуванням
    localeDetection: false,           // Вимкнути автоматичне виявлення мови
  },
};

module.exports = nextConfig;
