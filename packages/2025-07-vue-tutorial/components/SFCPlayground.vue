<script setup lang="ts">
import { playgrounds } from '../constants/playgrounds'

const props = defineProps<{
  category: string
  playground: string
}>()

function currentPlaygroundLink() {
  if (typeof window === 'undefined') return ''
  const encodedSrc = playgrounds[props.category]?.[props.playground]

  return `https://sfc.vuejs.org/#${encodedSrc}`
}
</script>

<template>
  <div class="sfc-layout">
    <div class="overflow-hidden h-full">
      <iframe
        :src="currentPlaygroundLink()"
        frameborder="0"
        width="960"
        height="460"
        class="sfc-iframe-full -mt-13 mb-2"
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
.sfc-layout {
  height: 100%;
}

.sfc-iframe-full {
  height: calc(100% + 1rem);
}
</style>