/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
    loader: 'custom',
    loaderFile: './src/utils/loader.ts',
  },
};

module.exports = nextConfig;