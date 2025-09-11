import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const isNetlify = process.env.NEXT_PUBLIC_DEPLOY_TARGET === 'netlify';

const nextConfig: NextConfig = {
  output: 'export',
  // Netlify는 basePath 불필요, GitHub Pages만 필요
  basePath: isProd && !isNetlify ? '/hasia-web-v3' : '',
  assetPrefix: isProd && !isNetlify ? '/hasia-web-v3' : '',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
