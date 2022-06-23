/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
    };
    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
