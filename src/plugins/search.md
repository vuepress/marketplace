---
title: Search Plugins
icon: search
---

<ProjectPanel v-for="item in config" v-bind="item" />

<script setup lang="ts">
import config from '@search-plugin-config'
</script>
