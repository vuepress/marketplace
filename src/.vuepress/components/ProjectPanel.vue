<script setup lang="ts">
import { useRouteLocale } from "@vuepress/client";
import { isPlainObject } from "@vuepress/shared";
import { computed } from "vue";

import ProjectDetail from "./ProjectDetail.vue";

const props = defineProps<{
  header: string | Record<string, string>;
  items: {
    name: string;
    type: "plugin" | "theme";
    desc: string;
    url: string;
    source: string;
  }[];
}>();

const routeLocale = useRouteLocale();

const panelHeader = computed(() => {
  const header = props.header;

  if (isPlainObject(header)) return header[routeLocale.value] || "";

  return header;
});
</script>

<template>
  <div class="project-panel">
    <h2 class="project-header">{{ panelHeader }}</h2>
    <div class="projects">
      <ProjectDetail v-for="item in items" v-bind="item" />
    </div>
  </div>
</template>

<style lang="scss">
.project-panel {
  margin: 0 -1rem;
  padding: 1.2rem 0;

  @media (max-width: hope-config.$mobile) {
    margin: 0 -0.5rem;
  }

  .project-header {
    margin: 0 1.75rem;
  }

  .projects {
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    align-items: stretch;
    justify-content: center;

    &:first-child {
      border-top: 1px solid var(--border-color);
      transition: border-color var(--color-transition);
    }
  }
}
</style>
