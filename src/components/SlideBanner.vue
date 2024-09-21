<template>
  <div class="relative h-[calc(60vh-4rem)] bg-gray-200">
    <transition name="fade" mode="out-in">
      <img
        :key="currentImageIndex"
        :src="bannerImages[currentImageIndex]"
        :alt="`Japan scenery ${currentImageIndex + 1}`"
        class="w-full h-full object-cover"
      />
    </transition>
    <div class="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center">
      <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 text-center">Discover Japan</h2>
      <p class="text-xl md:text-2xl text-white mb-8 text-center max-w-2xl px-4">
        Experience the beauty, culture, and innovation of Japan
      </p>
      <button
        class="px-6 py-3 bg-white text-gray-800 rounded-full hover:bg-gray-100 transition duration-150 font-semibold"
      >
        Start Your Journey
      </button>
    </div>
    <button
      @click="prevImage"
      class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white"
      aria-label="Previous image"
    >
      <ChevronLeft class="h-6 w-6" />
    </button>
    <button
      @click="nextImage"
      class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white"
      aria-label="Next image"
    >
      <ChevronRight class="h-6 w-6" />
    </button>
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <button
        v-for="(_, index) in bannerImages"
        :key="index"
        @click="setImage(index)"
        class="w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
        :class="index === currentImageIndex ? 'bg-white' : 'bg-gray-400'"
        :aria-label="`Go to image ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

import foods from '@/assets/foods.jpg'
import bamboo from '@/assets/bamboo.jpg'
import cherry_blossoms from '@/assets/cherry-blossoms.jpg'
import cities from '@/assets/cities.jpg'
import mountain from '@/assets/mountain.jpeg'

const bannerImages = ref([foods, bamboo, cherry_blossoms, cities, mountain])
const currentImageIndex = ref(0)
const autoSlideInterval = ref(5000)
let intervalId = null

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % bannerImages.value.length
}

const prevImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value - 1 + bannerImages.value.length) % bannerImages.value.length
}

const setImage = (index) => {
  currentImageIndex.value = index
  resetAutoSlide()
}

const startAutoSlide = () => {
  intervalId = setInterval(nextImage, autoSlideInterval.value)
}

const stopAutoSlide = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

const resetAutoSlide = () => {
  stopAutoSlide()
  startAutoSlide()
}

onMounted(() => {
  startAutoSlide()
})

onBeforeUnmount(() => {
  stopAutoSlide()
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
