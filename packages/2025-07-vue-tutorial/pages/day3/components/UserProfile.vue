<template>
  <div class="user-profile">
    <div v-if="loading" class="loading">載入中...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="user" class="user-info">
      <img :src="user.avatar" :alt="user.name" class="avatar" />
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
      <button @click="refreshUser" class="refresh-btn">重新整理</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useUser } from '../composables/useUser'

interface Props {
  userId: number
}

const props = defineProps<Props>()

const { user, loading, error, fetchUser } = useUser()

const refreshUser = async () => {
  await fetchUser(props.userId)
}

onMounted(() => {
  fetchUser(props.userId)
})
</script>

<style scoped>
.user-profile {
  max-width: 300px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin: 0 auto 1rem;
}

.user-info {
  text-align: center;
}

.loading, .error {
  text-align: center;
  padding: 2rem;
}

.error {
  color: #ff4757;
}

.refresh-btn {
  background: #3742fa;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
}

.refresh-btn:hover {
  background: #2f3542;
}
</style> 