/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ua', 'ru'],
    defaultLocale: 'en',
    localeDetection: true,
  },
}

module.exports = nextConfig;
