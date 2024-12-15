<!-- src/pages/FitnessPage.vue -->
<template>
    <div class="p-4">
      <h1 class="text-2xl font-bold mb-4">运动健康</h1>
      <div class="bg-white shadow-md rounded-lg p-4">
        <p class="text-gray-600">每日运动数据：</p>
        <div class="mt-4 grid grid-cols-2 gap-4">
          <div class="bg-blue-100 p-3 rounded">
            <h3 class="font-semibold">步数</h3>
            <span class="text-blue-600">{{ steps }} 步</span>
          </div>
          <div class="bg-green-100 p-3 rounded">
            <h3 class="font-semibold">消耗卡路里</h3>
            <span class="text-green-600">{{ calories }} kcal</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const steps = ref(10000)
  const calories = ref(350)
  
  </script>
  