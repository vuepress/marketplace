import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme(
  {
    hostname: "https://marketplacae.vuejs.press",

    iconAssets: "fontawesome-with-brands",

    logo: "/logo.png",

    repo: "vuepress/marketplace",

    docsDir: "src",

    pageInfo: false,

    locales: {
      "/": {
        // navbar
        navbar: ["/", "/plugins/", "/themes/"],

        // sidebar
        sidebar: "structure",

        footer:
          'Theme by <a href="https://theme-hope.vuejs.press/" target="_blank">VuePress Theme Hope</a> | CC0 Licensed',

        displayFooter: true,

        metaLocales: {
          editLink: "Edit this page on GitHub",
        },
      },

      /**
       * Chinese locale config
       */
      "/zh/": {
        // navbar
        navbar: ["/zh/", "/zh/plugins/", "/zh/themes/"],

        // sidebar
        sidebar: "structure",

        footer:
          '主题使用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank">VuePress Theme Hope</a> | CC0 协议',

        displayFooter: true,

        // page meta
        metaLocales: {
          editLink: "在 GitHub 上编辑此页",
        },
      },
    },

    markdown: {
      align: true,
      codeTabs: true,
      tasklist: true,
    },

    plugins: {
      comment: {
        provider: "Giscus",
        repo: "vuepress/marketplace",
        repoId: "R_kgDOItkaoA",
        category: "Announcements",
        categoryId: "DIC_kwDOItkaoM4CTau2",
      },

      photoSwipe: false,
    },
  },
  { custom: true },
);
