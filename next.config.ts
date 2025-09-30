import type { NextConfig } from "next";
import { PATH_PREFIX } from "./site.config";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages project site needs basePath until custom domain is working
  // Don't use basePath in development to avoid 404 errors
  basePath: isProd ? PATH_PREFIX : '',
  assetPrefix: isProd ? PATH_PREFIX : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
