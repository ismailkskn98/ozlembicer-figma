import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      unoptimized: true,
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'flagcdn.com',
            port: '',
            pathname: '/**',
         },
         {
            protocol: 'https',
            hostname: 'i.ytimg.com',
            port: '',
            pathname: '/**',
         },
      ],
   },
   // output: 'standalone',
};

export default withNextIntl(nextConfig);
