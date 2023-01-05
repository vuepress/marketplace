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
    "@plugin-config": path.resolve(__dirname, "../../config/plugins.json"),
    "@theme-config": path.resolve(__dirname, "../../config/themes.json"),
    "@theme-hope/components/HomePage": path.resolve(
      __dirname,
      "./components/HomePage.vue"
    ),
  },

  theme,
});
