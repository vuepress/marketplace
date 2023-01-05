---
title: 搜索插件
icon: search
---

<ProjectPanel v-for="item in config" v-bind="item" />

<script setup lang="ts">
import config from '@search-plugin-config'
</script>
