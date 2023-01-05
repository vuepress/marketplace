import { defineClientConfig } from "@vuepress/client";
import ProjectPanel from "./components/ProjectPanel.vue";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ProjectPanel", ProjectPanel);
  },
});
