import type { NextConfig } from "next";

const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';

const nextConfig: NextConfig = {
  assetPrefix: isGitHubPages ? 'https://aking16.github.io/windows-web-simulator' : '',
  output: "export"
};

export default nextConfig;
