/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: './public',
  },
  assetPrefix: './',
}

module.exports = nextConfig
