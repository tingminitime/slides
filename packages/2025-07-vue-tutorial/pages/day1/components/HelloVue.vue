<template>
  <div class="hello-vue">
    <h2>{{ title }}</h2>
    <p>歡迎來到 Vue 3 的世界！</p>
    <button
      @click="count++"
      class="btn"
    >
      點擊次數: {{ count }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Hello Vue 3!')
const count = ref(0)
</script>

<style scoped>
.hello-vue {
  text-align: center;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 1rem 0;
}

.btn {
  background: #42b883;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.btn:hover {
  background: #369870;
}
</style>