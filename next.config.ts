import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'standalone', // Enable standalone output for Docker
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all HTTPS domains for background images
      },
      {
        protocol: 'http',
        hostname: '**', // Allow all HTTP domains (for development)
      },
    ],
  },
};

export default nextConfig;
