<template>
  <div>
    <div class="my-4 mx-auto w-full max-w-[500px] h-[56px]">
      <input
        v-model="searchInput"
        placeholder="Search..."
        class="border border-border shadow-sm py-[6px] px-[10px] h-[32px] text-[14px] rounded w-full focus-within:outline-none ring-border focus-within:ring-2"
      />
      <p v-if="searchInput" class="my-1 tet-[12px]">
        <span class="font-semibold">{{ filteredAcrticles.length }}</span>
        results found.
      </p>
    </div>

    <div class="flex flex-col justify-center items-center gap-4">
      <template v-for="(article, index) in filteredAcrticles" :key="index">
        <ArticleCard>
          <template #article-title>
            <template v-for="(part, i) in highlightText(article.title)" :key="i">
              <span :class="{ highlight: part.highlight }">{{ part.text }}</span>
            </template>
          </template>
          <template #article-date>
            <span>{{ moment(article.date).format("MMM DD, YYYY") }}</span>
          </template>
          <template #article-body>
            <template v-for="(part, i) in highlightText(article.body)" :key="i">
              <span :class="{ highlight: part.highlight }">{{ part.text }}</span>
            </template>
          </template>
        </ArticleCard>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onUpdated } from "vue"
import { articles } from "../assets/data/articles"
import ArticleCard from "../components/ArticleCard.vue"
import moment from "moment"

const searchInput = ref("")

const filteredAcrticles = computed(() => {
  return articles.filter((article) => {
    return (
      article.title.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      article.body.toLowerCase().includes(searchInput.value.toLowerCase())
    )
  })
})

function highlightText(text) {
  if (searchInput.value.length < 1) return [{ text, highlight: false }]

  const searchTerm = searchInput.value.toLowerCase().trim()

  let startIndex = 0,
    result = []

  while (startIndex < text.length) {
    const termIndex = text.toLowerCase().indexOf(searchTerm, startIndex)

    // if no match
    if (termIndex === -1) {
      result.push({ text: text.slice(startIndex), highlight: false })
      break
    }

    // if text before search term
    if (termIndex > startIndex) {
      result.push({ text: text.slice(startIndex, termIndex), highlight: false })
    }

    // add search term
    result.push({
      text: text.slice(termIndex, termIndex + searchTerm.length),
      highlight: true
    })

    startIndex = termIndex + searchTerm.length
  }

  return result
}
</script>

<style scoped>
.highlight {
  background-color: var(--highlight);
}
</style>
