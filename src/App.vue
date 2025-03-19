<template>
  <div class="app-layout">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>

<style lang="scss" scoped>
.app-layout {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
