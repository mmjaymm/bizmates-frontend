<template>
  <div class="inset-0 flex items-center justify-center z-50">
    <div class="text-center">
      <Loader class="w-16 h-16 mb-4 text-yellow-400 animate-spin" />
      <p class="text-xl font-semibold">Loading.....</p>
    </div>
  </div>
</template>

<script setup>
import { Loader } from 'lucide-vue-next'
</script>
