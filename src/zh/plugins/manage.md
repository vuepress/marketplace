---
title: 站点管理
icon: gear
---

<ProjectPanel v-for="item in config" v-bind="item" />

<script setup lang="ts">
import config from '@manage-plugin-config'
</script>
