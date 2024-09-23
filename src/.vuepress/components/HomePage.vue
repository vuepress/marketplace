<script setup lang="ts">
import HopeHomePage from "vuepress-theme-hope/components/HomePage.js";

import { useDarkmode } from "@theme-hope/modules/outlook/composables/index";

const { isDarkmode } = useDarkmode();
</script>

<template>
  <HopeHomePage>
    <!-- Introduce comment component using bottom slot -->
    <template #bottom>
      <CommentService :darkmode="isDarkmode" />
    </template>
  </HopeHomePage>
</template>
