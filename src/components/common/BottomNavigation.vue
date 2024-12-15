<template>
    <footer class="fixed bottom-0 w-full bg-primary p-4 flex justify-around">
      <button @click="$router.push('/BCG')" class="text-white">BCG监测</button>
      <button @click="$router.push('/SleepState')" class="text-white">睡眠状态</button>
      <button @click="$router.push('/Report')" class="text-white">睡眠报告</button>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  </style>
  