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
  output: 'standalone',
  compiler: {
    removeConsole: {
      // true로 설정시 번들링시 모든 console 제거
      exclude: ['error'], // console.error 는 제거 항목에서 제외
    },
    emotion: true, // emotion SSR 스타일 주입
  },
  swcMinify: true, // next 컴파일러 사용하도록 지정
  experimental: {
    outputStandalone: true, // 서버에 실행에 필요한 파일만 빌드해서 내보내주겠다.
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
