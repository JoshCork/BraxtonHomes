import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'braxtonhomesaz.com',
      },
      {
        protocol: 'https',
        hostname: 'braxton.gosparksites.com',
      },
    ],
  },
};

export default nextConfig;
