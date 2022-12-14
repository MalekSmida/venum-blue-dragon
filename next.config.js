/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.shopify.com', 'a.storyblok.com', 'res.cloudinary.com'],
    unoptimized: true,
  },
  assetPrefix: './',
};

module.exports = nextConfig;
