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
    ],
  },
};

module.exports = nextConfig;
