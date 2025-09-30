import type { NextConfig } from "next";
import { PATH_PREFIX } from "./site.config";

const nextConfig: NextConfig = {
  output: "export",
  // Custom domain (hasia.ai) doesn't need basePath
  basePath: "",
  assetPrefix: "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
