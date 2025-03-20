import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  basePath: isProd ? 'https://aking16.github.io/windows-web-simulator/' : '',
  assetPrefix: isProd ? 'https://aking16.github.io/windows-web-simulator/' : '',
  output: "export",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
