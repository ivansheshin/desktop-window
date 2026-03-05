<script setup lang="ts">
  import AppFooter from "@/components/AppFooter.vue";
</script>
<template>
  <div class="default-layout">
    <main class="page">
      <slot />
    </main>
    <AppFooter class="footer" />
  </div>
</template>
