const rewrites =
  process.env.NODE_ENV === 'development'
    ? async () => {
        return {
          fallback: [
            {
              source: '/api/:path*',
              destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/:path*`,
            },
          ],
        };
      }
    : undefined;

/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites,
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
