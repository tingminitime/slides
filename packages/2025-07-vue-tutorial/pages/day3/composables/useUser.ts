import { ref, reactive } from 'vue'

interface User {
  id: number
  name: string
  email: string
  avatar: string
}

export function useUser() {
  const user = ref<User | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchUser = async (userId: number) => {
    if (!userId) {
      error.value = '無效的使用者 ID'
      return
    }

    loading.value = true
    error.value = null

    try {
      // 模擬 API 呼叫
      await new Promise(resolve => setTimeout(resolve, 1000))

      // 模擬 API 回應
      user.value = {
        id: userId,
        name: `使用者 ${userId}`,
        email: `user${userId}@example.com`,
        avatar: `https://i.pravatar.cc/150?img=${userId}`
      }
    } catch (err) {
      error.value = '載入使用者資料時發生錯誤'
      console.error('Error fetching user:', err)
    } finally {
      loading.value = false
    }
  }

  const resetUser = () => {
    user.value = null
    error.value = null
    loading.value = false
  }

  return {
    user,
    loading,
    error,
    fetchUser,
    resetUser
  }
} 