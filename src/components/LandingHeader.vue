<template>
  <header class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg sticky top-0 z-10">
    <div class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <a href="#" class="text-3xl font-bold hover:text-yellow-300 transition-colors flex">
          <img src="../assets/logo.png" alt="Japan Travel Logo" class="h-10 mr-2" />
          <h1 class="text-2xl font-bold text-white-800">Travellers</h1>
        </a>
        <div class="flex items-center space-x-4">
          <form @submit.prevent="handleSearch" class="relative hidden sm:block">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search destinations..."
              class="w-64 py-2 px-4 pr-12 rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-300"
            />
            <button
              type="submit"
              class="absolute right-1 top-1 bottom-1 px-3 bg-yellow-400 text-blue-900 rounded-full hover:bg-yellow-300 transition-colors"
            >
              <Search class="w-5 h-5" />
            </button>
          </form>
          <button @click="toggleMobileSearch" class="sm:hidden">
            <Search class="w-6 h-6" />
          </button>
        </div>
      </div>
      <div v-if="isMobileSearchOpen" class="mt-4 sm:hidden">
        <form @submit.prevent="handleSearch" class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search destinations..."
            class="w-full py-2 px-4 pr-12 rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-300"
          />
          <button
            type="submit"
            class="absolute right-1 top-1 bottom-1 px-3 bg-yellow-400 text-blue-900 rounded-full hover:bg-yellow-300 transition-colors"
          >
            <Search class="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Search } from 'lucide-vue-next'
import { ref } from 'vue'

const isMobileSearchOpen = ref(false)

const toggleMobileSearch = () => {
  isMobileSearchOpen.value = !isMobileSearchOpen.value
}
</script>
