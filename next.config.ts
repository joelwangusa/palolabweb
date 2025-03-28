import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v0.blob.com',
      },
      {
        protocol: 'https',
        hostname: 'sjc.microlink.io',
      },
    ],
  },
  // Next.js 14 automatically enables React Strict Mode
};

export default nextConfig;
