<template>
  <div
    class="border border-gray-200 rounded p-[10px] w-[700px] h-[125px] grid gap-y-[2px] shadow hover:shadow-lg"
  >
    <p class="text-[20px] font-semibold capitalize truncate">
      <slot name="article-title"></slot>
    </p>
    <p class="text-gray-500 font-semibold text-[12px] italic">
      <slot name="article-date"></slot>
    </p>
    <p class="text-[16px] text-wrap line-clamp-2">
      <slot name="article-body"></slot>
    </p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
