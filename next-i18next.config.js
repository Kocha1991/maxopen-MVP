// next-i18next.config.js
const { nextI18NextConfig } = require('next-i18next');

module.exports = {
  i18n: {
    defaultLocale: 'en',  // мова за замовчуванням
    locales: ['en', 'ru_UA', 'uk'], // доступні мови
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}
