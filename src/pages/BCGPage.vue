<template>
    <div class="p-4">
      <h1 class="text-2xl font-bold mb-4">BCG监测</h1>
      <div class="bg-white shadow-md rounded-lg p-4">
        <p class="text-gray-600">
          使用高精度压力传感器，通过床垫非接触式监测人体生命体征。
          精准捕捉心脏搏动和呼吸频率，实时分析睡眠质量。
        </p>
        <div class="mt-4 grid grid-cols-2 gap-4">
          <div class="bg-blue-100 p-3 rounded">
            <h3 class="font-semibold">心率监测</h3>
            <span class="text-blue-600">{{ heartRate }} bpm</span>
          </div>
          <div class="bg-green-100 p-3 rounded">
            <h3 class="font-semibold">呼吸频率</h3>
            <span class="text-green-600">{{ respiratoryRate }} /min</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useBCGMonitoring } from '@/composables/useBCGMonitoring'
  
  const { heartRate, respiratoryRate, fetchData } = useBCGMonitoring()
  
  let vitalSimInterval: any
  
  onMounted(() => {
    vitalSimInterval = setInterval(fetchData, 5000)  // 每5秒更新一次数据
  })
  
  onUnmounted(() => {
    clearInterval(vitalSimInterval)  // 清理定时器
  })
  </script>
  