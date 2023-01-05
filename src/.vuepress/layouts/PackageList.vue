<script setup lang="ts">
import CommonWrapper from "@theme-hope/components/CommonWrapper";
import FadeSlideY from "@theme-hope/components/transitions/FadeSlideY";
import MarkdownContent from "@theme-hope/components/MarkdownContent";
import SkipLink from "@theme-hope/components/SkipLink";
</script>
<template>
  <SkipLink />
  <CommonWrapper>
    <template #default>
      <FadeSlideY>
        <main class="package-list" id="main-content">
          <MarkdownContent />
        </main>
      </FadeSlideY>
    </template>
  </CommonWrapper>
</template>

<style scoped>
.package-list {
  --content-width: 980px;

  margin-top: var(--navbar-height);
  padding-top: 0.5rem;
}
</style>
