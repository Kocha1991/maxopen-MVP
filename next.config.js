// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Додаємо конфігурацію для оптимізації
  compiler: {
    // Відключаємо регенераторRuntime для зменшення розміру бандла
    reactRemoveProperties: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
