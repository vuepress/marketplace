<script setup lang="ts">
import HopeHomePage from "vuepress-theme-hope/components/HomePage.js";

import { useDarkMode } from "@theme-hope/modules/outlook/composables/index";

const { isDarkMode } = useDarkMode();
</script>

<template>
  <HopeHomePage>
    <!-- Introduce comment component using bottom slot -->
    <template #bottom>
      <CommentService :darkmode="isDarkMode" />
    </template>
  </HopeHomePage>
</template>
