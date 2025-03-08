/** @type {import('next').NextConfig} */

const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? '/PolishedPortfolio' : '',
  assetPrefix: isGithubPages ? '/PolishedPortfolio/' : '',
};

module.exports = nextConfig;
