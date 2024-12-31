import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['yassmimalice.github.io'], // Add any external domains you're loading images from
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;

