---
title: Markdown 相关
icon: markdown
---

<ProjectPanel v-for="item in pluginMarkdownConfig" v-bind="item" />

<script setup lang="ts">
import pluginMarkdownConfig from '@markdown-plugin-config'
</script>
