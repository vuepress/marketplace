---
title: Themes
icon: palette
layout: PackageList
---

<ProjectPanel v-for="item in themeConfig" v-bind="item" />

<script setup lang="ts">
import themeConfig from '@theme-config'
</script>
