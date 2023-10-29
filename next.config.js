/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  distDir: "build", // Specify the output directory
};

module.exports = nextConfig;
