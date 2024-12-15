<template>
    <div class="min-h-screen flex flex-col">
      <header>
        <slot name="header"></slot>
      </header>
      <main class="flex-1">
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  </style>
  