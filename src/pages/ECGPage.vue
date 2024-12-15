<!-- src/pages/ECGPage.vue -->
<template>
    <div class="p-4">
      <h1 class="text-2xl font-bold mb-4">ECG监测</h1>
      <div v-if="isLoading" class="text-gray-500">正在加载ECG数据...</div>
      <div v-else>
        <div v-for="(value, index) in ecgData" :key="index">
          <span>{{ value }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useECGData } from '@/composables/useECGData'
  
  const { ecgData, fetchECGData, isLoading } = useECGData()
  
  onMounted(() => {
    fetchECGData()
  })
  </script>
  