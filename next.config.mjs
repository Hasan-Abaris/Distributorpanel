/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com',
      },
    ],
  },

  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
        locale: false,
      },
    ];
  },
};

export default nextConfig;
