import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/hasia-website-deploy' : '',
  assetPrefix: isProd ? '/hasia-website-deploy' : '',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
