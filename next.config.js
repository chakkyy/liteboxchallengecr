/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
  },
  pageExtensions: ['jsx', 'js', 'tsx', 'ts'],
  i18n: {
    locales: ['es'],
    defaultLocale: 'es',
  },
};

module.exports = nextConfig;
