<template>
  <div class="app-layout">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.app-layout {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
  // overflow: auto;
}
</style>

<script setup>
import { RouterView } from "vue-router"
</script>
