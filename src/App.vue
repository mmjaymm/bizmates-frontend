<script setup lang="ts">
import { ref } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'
import { Search } from 'lucide-vue-next'
import { usePlacesStore } from '@/stores/places'

const isMobileSearchOpen = ref(false)
const places = usePlacesStore()
const searchQuery = ref('')
const route = useRoute()
const router = useRouter()

const searchPlaces = () => {
  places.$state.searchPlace = searchQuery.value
  if (route.path != '/') {
    return router.push('/')
  }

  places.getPlaces()
}

const toggleMobileSearch = () => {
  isMobileSearchOpen.value = !isMobileSearchOpen.value
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <header class="bg-white shadow">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <div class="flex items-center">
          <img src="./assets/logo.png" alt="Japan Travel Logo" class="h-10 mr-2" />
          <h1 class="text-2xl font-bold text-gray-800">Travellers</h1>
        </div>

        <div class="flex items-center space-x-4">
          <form @submit.prevent="searchPlaces" class="relative hidden sm:block">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search destinations..."
              class="w-64 py-2 px-4 pr-12 rounded-full border-2 border-blue-500 bg-opacity-20 backdrop-filter backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-300"
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
    </header>
    <RouterView />
  </div>
</template>
