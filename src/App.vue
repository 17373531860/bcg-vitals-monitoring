<template>
    <div class="min-h-screen bg-gray-50 flex flex-col">
      <!-- Header -->
      <header class="bg-blue-600 text-white p-4 text-center shadow-md">
        <h1 class="text-xl font-bold tracking-wider">BCG生命体征监测系统</h1>
      </header>
  
      <!-- Main content area -->
      <main class="flex-1 overflow-y-auto pb-20">
        <router-view v-slot="{ Component }">
          <transition
            name="fade"
            mode="out-in"
            class="transition-all duration-300 ease-in-out"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
  
      <!-- Bottom navigation -->
      <nav class="fixed bottom-0 left-0 right-0 bg-white shadow-lg flex justify-around p-3 z-50">
        <router-link
          v-for="route in navRoutes"
          :key="route.path"
          :to="route.path"
          class="flex flex-col items-center transition-colors duration-200"
          active-class="router-link-active"
        >
          <span class="text-2xl mb-1">{{ route.icon }}</span>
          <span class="text-xs">{{ route.name }}</span>
        </router-link>
      </nav>
    </div>
  </template>
  
  <script setup lang="ts">
  const navRoutes = [
    { path: '/bcg', name: 'BCG监测', icon: '📊' },
    { path: '/ecg', name: 'ECG数据', icon: '❤️' },
    { path: '/fitness', name: '健康追踪', icon: '💪' },
    { path: '/state', name: '睡眠状态', icon: '😴' },
    { path: '/report', name: '报告', icon: '📋' }
  ]
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  /* 移动端适配 */
  @media (max-width: 640px) {
    nav span {
      font-size: 0.75rem;
    }
  }
  
  /* 定义 router-link-active 样式 */
  .router-link-active {
    color: #2563eb; /* Tailwind 的 text-blue-600 颜色 */
  }
  </style>
  