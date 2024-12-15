// src/composables/useECGData.ts
import { ref } from 'vue'

export function useECGData() {
  const ecgData = ref<number[]>([])  // ECG 数据，假设是一个数字数组
  const isLoading = ref(false)

  const fetchECGData = async () => {
    isLoading.value = true
    try {
      // 假设我们通过一个 API 请求获取数据
      const response = await fetch('/api/ecg')
      const data = await response.json()
      ecgData.value = data.values  // 假设返回的数据结构中包含 `values`
    } catch (error) {
      console.error('获取ECG数据失败:', error)
    } finally {
      isLoading.value = false
    }
  }

  return {
    ecgData,
    fetchECGData,
    isLoading
  }
}
