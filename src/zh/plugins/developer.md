---
title: 面向开发者
icon: code
---

<ProjectPanel v-for="item in config" v-bind="item" />

<script setup lang="ts">
import config from '@developer-plugin-config'
</script>
