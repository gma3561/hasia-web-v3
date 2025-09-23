import type { NextConfig } from "next";
import { PATH_PREFIX } from "./site.config";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages 프로젝트 사이트의 경우 리포지토리 경로를 prefix로 사용
  basePath: PATH_PREFIX,
  assetPrefix: PATH_PREFIX,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
