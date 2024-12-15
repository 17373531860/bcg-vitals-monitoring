<template>
    <div class="home-container">
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">BCG Vitals Monitoring</h1>
            <p class="py-6">
              欢迎使用生命体征监测系统。这里可以 overview 你的健康数据和各项监测功能。
            </p>
            <div class="flex justify-center space-x-4">
              <router-link to="/bcg" class="btn btn-primary">
                BCG监测
              </router-link>
              <router-link to="/ecg" class="btn btn-secondary">
                ECG监测
              </router-link>
              <router-link to="/state" class="btn btn-accent">
                睡眠分析
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  .home-container {
    background: linear-gradient(to right, #f0f4f8, #e6f2ff);
  }
  </style>
  