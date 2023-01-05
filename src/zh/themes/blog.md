---
title: 博客主题
icon: blog
order: 2
---

<ProjectPanel v-for="item in config" v-bind="item" />

<script setup lang="ts">
import config from '@blog-theme-config'
</script>
