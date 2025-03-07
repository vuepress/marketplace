<script setup lang="ts">
import { computed } from "vue";
import { useRouteLocale } from "vuepress/client";
import {
  isLinkHttp,
  isPlainObject,
  useLocaleConfig,
} from "@vuepress/helper/client";
import { GitHubIcon } from "vuepress-shared/client";

import { normalizePackageName } from "../utils/index.js";

const props = withDefaults(
  defineProps<{
    name: string;
    url: string | Record<string, string>;
    source: string;
    title?: string | Record<string, string>;
    desc?: string | Record<string, string>;
    icon?: string;
    type?: "plugin" | "theme";
    packageName?: string;
    tag?: string;
    recommend?: boolean;
  }>(),
  {
    title: "",
    desc: "",
    icon: "",
    type: "plugin",
    tag: "next",
    recommend: false,
  },
);

const locale = useLocaleConfig({
  "/": { source: "Source" },
  "/zh/": { source: "源代码" },
});
const routeLocale = useRouteLocale();

const getUrl = (url: string): string =>
  isLinkHttp(url) ? url : `https://${url}`;

const packageName = computed(
  () =>
    props.packageName ||
    normalizePackageName(props.name, "vuepress", props.type),
);

const projectTitle = computed(() => {
  if (isPlainObject(props.title))
    return props.title[routeLocale.value] || packageName.value;

  return props.title || packageName.value;
});

const projectDescription = computed(() => {
  const desc = props.desc;

  if (isPlainObject(desc)) return desc[routeLocale.value] || "";

  return desc;
});

const projectLink = computed(() => {
  if (isPlainObject(props.url)) return getUrl(props.url[routeLocale.value]);

  return getUrl(props.url);
});

const projectSource = computed(() => {
  if (!props.source.includes(".")) return `https://github.com/${props.source}`;

  return isLinkHttp(props.source) ? props.source : `https://${props.source}`;
});

const badges = computed(() => [
  [
    `https://img.shields.io/npm/v/${packageName.value}/${props.tag}.svg?style=flat-square`,
    "version",
  ],
  [
    `https://img.shields.io/npm/dm/${packageName.value}.svg?style=flat-square`,
    "downloads",
  ],
  [
    `https://img.shields.io/npm/l/${packageName.value}.svg?style=flat-square`,
    "license",
  ],
]);

const open = () => {
  window.open(projectLink.value, "_blank");
};
</script>

<template>
  <div class="project-card" :class="{ recommend }" @click="open">
    <a
      class="project-card-source"
      :href="projectSource"
      :title="locale.source"
      target="_blank"
      @click.stop
    >
      <GitHubIcon class="source-icon" />
    </a>
    <h3 class="project-header" :id="packageName">
      <VPIcon class="project-icon" :icon="icon" />
      {{ projectTitle }}
    </h3>
    <p
      v-if="projectDescription"
      class="project-desc"
      v-html="projectDescription"
    />
    <div class="project-info">
      <img
        v-for="[src, alt] in badges"
        class="project-badge"
        :src="src"
        :alt="alt"
      />
    </div>
  </div>
</template>

<style lang="scss">
.project-card {
  position: relative;

  flex-basis: calc(50% - 3rem);

  margin: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;

  box-shadow: 1px 1px 8px var(--vp-c-shadow);

  cursor: pointer;

  transition:
    box-shadow var(--vp-t-color),
    box-shadow var(--vp-t-transform);

  @media (max-width: hope-config.$pad) {
    flex-basis: calc(100% - 2rem);
    margin: 0.5rem 0;
    font-size: 0.9rem;
  }

  .project-icon {
    display: inline-block;
    color: var(--vp-c-accent);
    width: 1.1em;
    height: 1.1em;
    font-size: 1.1em;
    font-weight: normal;
    vertical-align: text-bottom;

    .svg-inline--fa {
      vertical-align: 0;
    }
  }

  &:hover {
    background-color: var(--vp-c-bg-alt);
    box-shadow: 0 2px 12px 0 var(--vp-c-shadow);

    .project-icon {
      animation-name: bounce;
      animation-duration: var(--fa-animation-duration, 1s);
      animation-timing-function: var(
        --fa-animation-timing,
        cubic-bezier(0.28, 0.84, 0.42, 1)
      );
      animation-delay: var(--fa-animation-delay, 0s);
      animation-direction: var(--fa-animation-direction, normal);
    }
  }

  &.recommend {
    flex-basis: calc(50% - 3.25rem);

    border: 0.125rem solid transparent;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    background-image:
      linear-gradient(to right, var(--vp-c-bg), var(--vp-c-bg)),
      linear-gradient(120deg, #f6d365, #fda085);

    @media (max-width: hope-config.$pad) {
      flex-basis: calc(100% - 2.25rem);
      margin: 0.5rem 0;
      font-size: 0.9rem;
    }

    &:hover {
      background-image:
        linear-gradient(to right, var(--vp-c-bg-alt), var(--vp-c-bg-alt)),
        linear-gradient(-120deg, #f6d365, #fda085);
    }
  }

  .project-header {
    margin: 0.25rem 0 0.5rem !important;
    color: var(--vp-c-text-mute);
    font-weight: bold;
    font-size: 1.3rem;

    @media (max-width: hope-config.$pad) {
      font-size: 1.2rem;
    }
  }

  .project-desc {
    margin: 0.5rem 0;
    color: var(--vp-c-text-subtle);
    line-height: 1.4;
  }
}

.project-card-source {
  float: right;

  width: 1.5rem;
  height: 1.5rem;

  transition: transform var(--vp-c-transform);

  &::before {
    display: none;
  }

  &:hover {
    transform: scale(1.1);
  }

  .source-icon {
    width: 100%;
    height: 100%;
    color: var(--vp-c-text);
  }
}

.project-badge {
  margin: 0.25rem;
}
</style>
