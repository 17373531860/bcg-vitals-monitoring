// src/composables/useSleepAnalysis.ts
import { ref } from 'vue'

export function useSleepAnalysis() {
  const sleepData = ref<any>(null)
  const isLoading = ref(false)

  const fetchSleepData = async () => {
    isLoading.value = true
    try {
      const response = await fetch('/api/sleep')
      const data = await response.json()
      sleepData.value = data
    } catch (error) {
      console.error('获取睡眠数据失败:', error)
    } finally {
      isLoading.value = false
    }
  }

  return {
    sleepData,
    fetchSleepData,
    isLoading
  }
}
