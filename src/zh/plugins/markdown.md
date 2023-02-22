---
title: Markdown 相关
icon: fab fa-markdown
---

<ProjectPanel v-for="item in pluginMarkdownConfig" v-bind="item" />

<script setup lang="ts">
import pluginMarkdownConfig from '@markdown-plugin-config'
</script>
