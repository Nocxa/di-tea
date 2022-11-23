/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
}

module.exports = nextConfig

// /**
//    * @type {import('next').NextConfig}
//    */
//  const nextConfig   = {
//   images: {
//     loader: 'akamai',
//     path: '',
//   },
//   assetPrefix: './',
// };

// export default   nextConfig;
