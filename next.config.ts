import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/hasia-website-final',
  assetPrefix: '/hasia-website-final',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
