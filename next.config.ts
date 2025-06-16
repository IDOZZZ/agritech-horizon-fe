import type { NextConfig } from "next";



const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '**',
      },
      {
        protocol: 'http', // Gunakan http karena Strapi berjalan di http
        hostname: 'localhost',
        port: '1337', // Tambahkan port Strapi
        pathname: '/uploads/**', // Sesuaikan dengan path upload Strapi Anda
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
