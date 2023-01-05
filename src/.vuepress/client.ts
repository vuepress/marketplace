import { defineClientConfig } from "@vuepress/client";
import ProjectDetail from "./components/ProjectDetail.vue";
import ProjectPanel from "./components/ProjectPanel.vue";
import PackageList from "./layouts/PackageList.vue";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ProjectDetail", ProjectDetail);
    app.component("ProjectPanel", ProjectPanel);
  },
  layouts: {
    PackageList,
  },
});
