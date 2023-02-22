---
title: 新功能
icon: splotch
---

<ProjectPanel v-for="item in config" v-bind="item" />

<script setup lang="ts">
import config from '@feature-plugin-config'
</script>
