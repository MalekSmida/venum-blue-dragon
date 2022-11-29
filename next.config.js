/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'cdn.shopify.com',
      'a.storyblok.com',
      'euro.venum.com',
      'venumtrainingcamp.com',
      'cdn-icons-png.flaticon.com',
    ],
  },
};

module.exports = nextConfig;
