// src/services/apiService.ts
export const apiService = {
    async fetchVitals() {
      const response = await fetch('/api/vitals')
      if (!response.ok) throw new Error('获取生命体征数据失败')
      return await response.json()
    },
  
    async fetchSleepReport() {
      const response = await fetch('/api/sleep-report')
      if (!response.ok) throw new Error('获取睡眠报告失败')
      return await response.json()
    }
  }
  