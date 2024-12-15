// src/stores/vitalsStore.ts
import { defineStore } from 'pinia'

export const useVitalsStore = defineStore('vitals', {
  state: () => ({
    heartRate: 0,
    respiratoryRate: 0,
    bodyMovement: false,
    bedStatus: 'in' as 'in' | 'out',
  }),
  actions: {
    setVitals(data: { heartRate: number; respiratoryRate: number; bodyMovement: boolean; bedStatus: 'in' | 'out' }) {
      this.heartRate = data.heartRate
      this.respiratoryRate = data.respiratoryRate
      this.bodyMovement = data.bodyMovement
      this.bedStatus = data.bedStatus
    }
  }
})
