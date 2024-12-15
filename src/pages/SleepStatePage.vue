<template>
    <MainLayout>
      <template #header>
        <Header />
      </template>
  
      <div class="p-4">
        <h2 class="text-2xl">睡眠状态</h2>
        <p class="mt-2">查看您的睡眠状态数据。</p>
  
        <!-- 模拟图表和信息展示 -->
        <SleepQualityChart />
      </div>
      
      <BottomNavigation />
    </MainLayout>
  </template>
  
  <script setup>
  import Header from '@/components/common/Header.vue'
  import BottomNavigation from '@/components/common/BottomNavigation.vue'
  import SleepQualityChart from '@/components/charts/SleepQualityChart.vue'
  </script>
  
  <style scoped>
  </style>
  