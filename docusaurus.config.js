// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "2024: 独立开发的第一年，我的成长与收获",
  favicon: "img/favicon.ico",
  url: "https://indie2024.laike9m.com/",
  baseUrl: "/",
  projectName: "indie2024",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve('./sidebar.js'),
          routeBasePath: "/", // Makes docs the root
          breadcrumbs: false, // Removes breadcrumbs for a cleaner book look
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "2024: 独立开发的第一年，我的成长与收获",
      items: [], // Minimal navbar items
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true, // Auto-collapse other categories
        hideable: true,
      },
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} laike9m`,
    },
  },
};

export default config;
