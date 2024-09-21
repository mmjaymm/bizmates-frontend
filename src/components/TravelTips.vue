<template>
  <section id="tips" class="mb-20">
    <h2 class="text-3xl font-semibold mb-8">Traveler Tips</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="tip in tips"
        :key="tip.title"
        class="bg-gray-600 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:bg-opacity-30"
      >
        <component :is="tip.icon" class="w-8 h-8 mb-4" />
        <h3 class="text-xl font-semibold mb-2">{{ tip.title }}</h3>
        <p>{{ tip.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Sun, Umbrella, Utensils, Map, Camera, ShieldCheck } from 'lucide-vue-next'

const tips = ref([
  {
    icon: Umbrella,
    title: 'Weather Preparedness',
    description:
      "Pack light, breathable clothing and don't forget sunscreen and a hat for sun protection."
  },
  {
    icon: Utensils,
    title: 'Local Cuisine',
    description:
      'Try the local seafood dishes and tropical fruits for an authentic island experience.'
  },
  {
    icon: Map,
    title: 'Explore Wisely',
    description:
      'Use official tour guides for exploring the island to ensure safety and support the local economy.'
  },
  {
    icon: Camera,
    title: 'Capture Memories',
    description: 'Bring a waterproof camera or phone case to capture underwater moments.'
  },
  {
    icon: Sun,
    title: 'Beach Safety',
    description:
      'Always swim in designated areas and be aware of tide times and potential currents.'
  },
  {
    icon: ShieldCheck,
    title: 'Travel Insurance',
    description:
      'Consider getting travel insurance to cover any unexpected medical expenses or trip cancellations.'
  }
])
</script>
