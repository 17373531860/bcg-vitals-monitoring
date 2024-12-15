import { ref } from 'vue'

export function useBCGMonitoring() {
  const heartRate = ref(72)
  const respiratoryRate = ref(16)

  function fetchData() {
    heartRate.value = Math.floor(Math.random() * (80 - 65 + 1)) + 65
    respiratoryRate.value = Math.floor(Math.random() * (18 - 14 + 1)) + 14
  }

  return { heartRate, respiratoryRate, fetchData }
}
