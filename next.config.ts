import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  basePath: isProd ? '/windows-web-simulator' : '',
  assetPrefix: isProd ? '/windows-web-simulator/' : '',
  output: "export",
  images: {
    unoptimized: true
  }
};

export default nextConfig;