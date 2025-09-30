import type { NextConfig } from "next";
import { PATH_PREFIX } from "./site.config";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages project site needs basePath until custom domain is working
  basePath: PATH_PREFIX,
  assetPrefix: PATH_PREFIX,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
