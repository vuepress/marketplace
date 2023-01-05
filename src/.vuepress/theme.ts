import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  hostname: "https://vuejs.press",

  iconAssets: "iconfont",

  logo: "/logo.png",

  repo: "vuepress/marketplace",

  docsDir: "src",

  pageInfo: ["Author", "Date", "ReadingTime"],

  locales: {
    "/": {
      // navbar
      navbar: ["/", "/plugins/", "/themes/"],

      // sidebar
      sidebar: false,

      footer: "Default footer",

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
      sidebar: false,

      footer: "默认页脚",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  plugins: {
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
