<template>
  <section id="gallery" class="mb-20">
    <h2 class="text-3xl font-semibold mb-8">Photo Gallery</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(photo, index) in props.photos.slice(0, 6)"
        :key="index"
        class="relative overflow-hidden rounded-lg aspect-w-16 aspect-h-9 transform transition duration-500 hover:scale-105"
      >
        <img :src="photo.image" :alt="photo.id" class="object-cover w-full h-full" />
        <div
          class="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 opacity-0 hover:opacity-100 transition-opacity duration-300"
        >
          <p class="text-white">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  photos: Object
})
</script>
