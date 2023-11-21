import { getDirname, path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "VuePress Marketplace",
      description: "Marketplace of VuePress Ecosystem",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "VuePress 市场",
      description: "VuePress 生态市场",
    },
  },

  alias: {
    "@blog-plugin-config": path.resolve(
      __dirname,
      "../../config/plugins/blog.json",
    ),
    "@developer-plugin-config": path.resolve(
      __dirname,
      "../../config/plugins/developer.json",
    ),
    "@feature-plugin-config": path.resolve(
      __dirname,
      "../../config/plugins/feature.json",
    ),
    "@manage-plugin-config": path.resolve(
      __dirname,
      "../../config/plugins/manage.json",
    ),
    "@markdown-plugin-config": path.resolve(
      __dirname,
      "../../config/plugins/markdown.json",
    ),
    "@search-plugin-config": path.resolve(
      __dirname,
      "../../config/plugins/search.json",
    ),
    "@blog-theme-config": path.resolve(
      __dirname,
      "../../config/themes/blog.json",
    ),
    "@docs-theme-config": path.resolve(
      __dirname,
      "../../config/themes/docs.json",
    ),
    "@theme-hope/components/HomePage": path.resolve(
      __dirname,
      "./components/HomePage.vue",
    ),
  },

  theme,
});
