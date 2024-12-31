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
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
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
    image: 'https://indie2024.laike9m.com/img/ebook-cover.png', // 这将是你的默认社交媒体图片
    metadata: [
      // 基础 SEO
      { name: 'description', content: '2024 年，我踏上了独立开发之旅。这短短一年让我有很多体悟，因此想以年终总结的形式记录一下。' },

      // Open Graph
      { property: 'og:title', content: '2024: 独立开发的第一年，我的成长与收获' },
      { property: 'og:description', content: '2024 年，我踏上了独立开发之旅。这短短一年让我有很多体悟，因此想以年终总结的形式记录一下。' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://indie2024.laike9m.com/img/ebook-cover.png' },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: '2024: 独立开发的第一年，我的成长与收获' },
      { name: 'twitter:description', content: '2024 年，我踏上了独立开发之旅。这短短一年让我有很多体悟，因此想以年终总结的形式记录一下。' },
      { name: 'twitter:image', content: 'https://indie2024.laike9m.com/img/ebook-cover.png' },
    ],
  },
};

export default config;
