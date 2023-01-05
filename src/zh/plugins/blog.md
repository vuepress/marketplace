---
title: 博客相关
icon: blog
---

<ProjectPanel v-for="item in config" v-bind="item" />

<script setup lang="ts">
import config from '@blog-plugin-config'
</script>
