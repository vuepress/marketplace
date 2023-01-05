import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  hostname: "https://vuejs.press",

  iconAssets: "iconfont",

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
        '主题使用 <a href="https://theme-hope.vuejs.press/" target="_blank">VuePress Theme Hope</a> | CC0 协议',

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  plugins: {
    components: {
      components: ["Catalog"],
    },
    comment: {
      provider: "Giscus",
      repo: "vuepress/marketplace",
      repoId: "R_kgDOItkaoA",
      category: "Announcements",
      categoryId: "DIC_kwDOItkaoM4CTau2",
    },

    mdEnhance: {
      align: true,
    },

    photoSwipe: false,
  },
});
