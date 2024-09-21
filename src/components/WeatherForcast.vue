<template>
  <section id="forecast" class="mb-20">
    <h2 class="text-3xl font-semibold mb-8">Today's Forecast</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      <div
        v-for="forecast in props.forecasts"
        :key="forecast.time"
        class="bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 text-center transform transition duration-500 hover:scale-105 hover:bg-opacity-30 bg-gray-600"
      >
        <h3 class="text-xl font-semibold mb-2">{{ forecast.time }}</h3>
        <div class="text-5xl font-bold mb-2">{{ forecast.temp }}C</div>
        <div class="flex justify-center items-center">
          <img :src="forecast.weather.icon" :alt="forecast.weather.name" />
          <span>{{ forecast.weather.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  forecasts: Object
})
</script>
