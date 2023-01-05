---
title: 插件
icon: plugin
layout: PackageList
---

<ProjectPanel v-for="item in pluginConfig" v-bind="item" />

<script setup lang="ts">
import pluginConfig from '@plugin-config'
</script>
