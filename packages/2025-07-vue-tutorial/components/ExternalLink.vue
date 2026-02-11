<script setup lang="ts">
interface Props {
  href: string
  target?: '_blank' | '_self' | '_parent' | '_top'
}

withDefaults(defineProps<Props>(), {
  target: '_blank',
})
</script>

<template>
  <a
    :href="href"
    :target="target"
    class="inline-block w-max transition-colors flex items-center gap-x-1.5 bg-zinc-700/50 hover:bg-zinc-700/90 border important-border-solid important-border-zinc-100/50 rounded pl-4 pr-3 py-0.5 text-white hover:important-text-white"
  >
    <slot />
    <div i-heroicons:arrow-top-right-on-square-16-solid></div>
  </a>
</template>

<style scoped></style>