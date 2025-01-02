// next.config.js
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'uk', 'ru_UA'],
    defaultLocale: 'en',
    localeDetection: false,
  },
};

module.exports = nextConfig;
