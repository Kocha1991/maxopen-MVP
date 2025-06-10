/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.maxopen.com.ua',
        port: '',
        pathname: '/uploads/**', // Це дозволить завантажувати файли з будь-якої піддиректорії в /uploads/
      },
    ],
  },
};

module.exports = nextConfig;