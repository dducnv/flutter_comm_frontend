/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL: "https://tute-app-ypxpc.appengine.bfcplatform.vn",
  },
};

module.exports = nextConfig;
