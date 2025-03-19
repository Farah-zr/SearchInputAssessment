<template>
  <div>
    <div class="my-4 mx-auto w-full max-w-[500px]">
      <input
        v-model="searchInput"
        placeholder="Search..."
        class="border py-[6px] px-[10px] h-[32px] text-[14px] rounded w-full"
      />
      <p v-if="searchInput" class="font-bold tet-[12px]">{{ filteredAcrticles.length }} found</p>
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

  // split text every search term
  const parts = text.toLowerCase().split(searchTerm)

  // no keywords found
  if (parts.length === 1) return [{ text, highlight: false }]

  return parts
    .map((part, index, arr) => {
      if (index < arr.length - 1) {
        return [
          { text: part, highlight: false },
          { text: searchTerm, highlight: true }
        ]
      }

      return [{ text: part, highlight: false }]
    })
    .flat()
}
</script>

<style scoped>
.highlight {
  background-color: yellow;
}
</style>
