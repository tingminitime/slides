<script setup lang="ts">
import { computed } from 'vue'
import { playgrounds } from '../constants/playgrounds'

const props = defineProps<{
  category: string
  link?: string
}>()

const currentLink = computed(() => {
  return `https://sfc.vuejs.org/#${playgrounds[props.category]?.[props.link]}`
})
</script>

<template>
  <a
    class="transition-colors flex items-center gap-x-1.5 bg-blue-500 hover:bg-blue-600 rounded-md px-2 py-0.5 text-white"
    :href="currentLink"
    target="_blank"
  >
    Playground
    <div i-heroicons:arrow-top-right-on-square-16-solid></div>
  </a>
</template>

<style scoped></style>