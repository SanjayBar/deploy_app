/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    legacyBrowsers: false,
    outputFileTracingIgnores: ["**canvas**"],
  },
  webpack: (config) => {
    config.externals.push({
      canvas: "commonjs canvas",
    });
    return config;
  },
};

module.exports = nextConfig;
