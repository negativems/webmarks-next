/** @type {import('next').NextConfig} */
const nextConfig = {
   swcMinify: true,
   experimental: {
      appDir: true,
      serverComponentsExternalPackages: ['@tremor/react'],
   },
};

module.exports = nextConfig;
