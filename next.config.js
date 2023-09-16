/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "38.180.11.127",
      },
    ],
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );
    {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      });

      return config;
    }

    // config.module.rules.push(
    //   {
    //     ...fileLoaderRule,
    //     test: /\.svg$/i,
    //     resourceQuery: /url/,
    //   },
    //   {
    //     test: /\.svg$/i,
    //     issuer: /\.[jt]sx?$/,
    //     resourceQuery: { not: /url/ },
    //     use: ["@svgr/webpack"],
    //   }
    // );
    // fileLoaderRule.exclude = /\.svg$/i;
    // return config;
  },
};

// module.exports = {
//   webpack: (config, options) => {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ["@svgr/webpack"],
//     });
//     return config;
//   },
// };

// const path = require("path");

// const { apiProxy } = require('./src/setupProxy');

// const config = {
//   webpack(config) {
//     config.resolve.alias[package.name] = path.resolve(__dirname, "src");
//     return config;
//   },
// };

// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: "/src/*",
//       },
//     ];
//   },
// };

module.exports = nextConfig;
