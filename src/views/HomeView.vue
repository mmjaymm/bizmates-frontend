<script setup>
import { computed } from 'vue'
import SlideBanner from '@/components/SlideBanner.vue'
import FooterSection from '@/components/FooterSection.vue'
import { usePlacesStore } from '@/stores/places'
import Loading from '@/components/Loading.vue'

const places = usePlacesStore()
const isLoading = computed(() => places.$state.loading)

places.getPlaces()
</script>

<template>
  <div>
    <!-- Banner with images -->
    <SlideBanner />
    <!-- Main content -->
    <main class="container mx-auto px-4 py-8 flex-grow">
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Left section: List of places -->
        <Loading v-if="isLoading" />
        <div v-else class="w-full flex gap-8">
          <div class="w-full md:w-2/3">
            <h2 class="text-2xl font-bold mb-4">Popular Destinations</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                v-for="place in places.lists"
                :key="place.id"
                class="bg-white rounded-lg shadow overflow-hidden"
              >
                <img
                  :src="place.photos[0].image"
                  :alt="place.name"
                  class="w-full h-48 object-cover"
                />
                <div class="p-4">
                  <h3 class="text-xl font-semibold mb-2">{{ place.name }}</h3>
                  <p class="text-gray-600">{{ place.location.formatted_address }}</p>
                  <p class="text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, a
                    dignissimos! Eius, consectetur! Quis voluptates sed deleniti.
                  </p>
                  <RouterLink
                    :to="`/about/${place.id}`"
                    class="mt-4 px-4 py-2 bg-blue-500 text-white rounded transition duration-300 cursor-pointer hover:underline"
                  >
                    See More
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>

          <!-- Right section: Related places -->
          <div class="w-full md:w-1/3" v-if="places.$state.lists[0]?.related_places.length > 0">
            <h2 class="text-2xl font-bold mb-4">Related Places</h2>
            <div class="bg-white rounded-lg shadow p-4">
              <ul class="space-y-4">
                <li
                  v-for="relatedPlace in places.lists[0].related_places.slice(0, 8)"
                  :key="relatedPlace.id"
                  class="flex items-start"
                >
                  <img
                    :src="relatedPlace.icon"
                    :alt="relatedPlace.name"
                    class="w-16 h-16 object-cover rounded mr-4 bg-black"
                  />
                  <div>
                    <h4 class="font-semibold">{{ relatedPlace.name }}</h4>
                    <p class="text-sm text-gray-600">{{ relatedPlace.short_name }}</p>
                    <p class="text-sm text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, a
                      dignissimos! Eius, consectetur! Quis voluptates sed deleniti.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <FooterSection />

    <RouterView />
  </div>
</template>
