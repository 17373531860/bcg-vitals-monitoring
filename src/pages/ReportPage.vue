<template>
    <MainLayout>
      <template #header>
        <Header />
      </template>
  
      <div class="p-4">
        <h2 class="text-2xl">睡眠报告</h2>
        <p class="mt-2">查看详细的睡眠报告。</p>
        <div class="card mt-6">
          <h3 class="font-semibold text-xl">综合报告</h3>
          <!-- 模拟报告内容 -->
          <p>您的睡眠质量很好，心跳和呼吸平稳。</p>
        </div>
      </div>
      
      <BottomNavigation />
    </MainLayout>
  </template>
  
  <script setup>
  import Header from '@/components/common/Header.vue'
  import BottomNavigation from '@/components/common/BottomNavigation.vue'
  </script>
  
  <style scoped>
  </style>
  