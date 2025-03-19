<template>
  <div class="relative w-full">
    <input
      type="text"
      :value="searchInput"
      :placeholder="placeholder"
      @input="(e) => updateInput(e.target.value)"
      class="flex items-center justify-center border border-border shadow-sm py-[6px] pl-[10px] pr-[25px] h-[32px] text-[14px] rounded w-full focus-within:outline-none ring-border focus-within:ring-2"
    />
    <span class="absolute end-0 inset-y-0 flex items-center justify-center px-2">
      <Icon
        v-if="searchInput.length > 0"
        icon="mdi:remove"
        class="size-4 opacity-70 cursor-pointer"
        @click="updateInput('')"
      />
      <Icon v-else icon="mdi:search" class="size-4 opacity-50" />
    </span>
  </div>
</template>

<style lang="scss" scoped></style>

<script setup>
import { ref } from "vue"
import { Icon } from "@iconify/vue"

const props = defineProps(["placeholder"])

const emits = defineEmits(["update"])

const searchInput = ref("")

function updateInput(text) {
  searchInput.value = text
  emits("update", searchInput.value)
}
</script>
