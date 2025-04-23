// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // i18n: {
  //   locales: ['en', 'uk', 'ru'],
  //   defaultLocale: 'en',
  //   localeDetection: false,
  //   domains: [
  //       {
  //         domain: "localhost.uk",
  //         defaultLocale: "uk",
  //         http: true,
  //       },
  //       {
  //         domain: "localhost.ru",
  //         defaultLocale: "ru",
  //         http: true,
  //       },
  //       {
  //         domain: "localhost.com",
  //         defaultLocale: "en",
  //         http:  true,
  //       },
  //     ],
  //   },
  
  // Додаємо конфігурацію для оптимізації
  // compiler: {
  //   // Відключаємо регенераторRuntime для зменшення розміру бандла
  //   reactRemoveProperties: true,
  //   removeConsole: process.env.NODE_ENV === 'production',
  // },
}

module.exports = nextConfig
