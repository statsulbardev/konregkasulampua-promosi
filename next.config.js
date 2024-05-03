const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  unstable_flexsearch: true,
  unstable_staticImage: true,
});

module.exports = {
  ...withNextra(),
  // basePath: "/kasulampua-promosi/build",
  // assetPrefix: "/kasulampua-promosi/build/",
  images: {
    unoptimized: true,
  },
};
