<template>
  <div class="min-h-screen bg-gradient-to-brfont-sans">
    <!-- <LandingHeader /> -->
    <Loading v-if="isLoading" />
    <main v-else class="container mx-auto px-6 py-12">
      <section id="hero" class="text-center mb-20">
        <h2 class="text-5xl font-bold mb-6">Discover Your Perfect Weather Getaway</h2>
        <p class="text-xl mb-8">
          Plan your trip with accurate weather forecasts and local insights
        </p>
        <button
          class="bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-colors"
        >
          Start Exploring
        </button>
      </section>

      <WeatherForcast :forecasts="place.$state.place.weather_forecast" />

      <PlaceInfo :destination="place.$state.place" />

      <Gallery :photos="place.$state.place.photos" />

      <TravelTips />
      <section id="cta" class="text-center">
        <h2 class="text-4xl font-bold mb-6">Ready for Your Next Adventure?</h2>
        <p class="text-xl mb-8">
          Sign up now to receive personalized weather forecasts and travel recommendations!
        </p>
      </section>
    </main>

    <FooterSection />
  </div>
</template>

<script setup>
import WeatherForcast from '@/components/WeatherForcast.vue'
import PlaceInfo from '@/components/PlaceInfo.vue'
import Gallery from '@/components/Gallery.vue'
import TravelTips from '@/components/TravelTips.vue'
import FooterSection from '@/components/FooterSection.vue'
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import { usePlacesStore } from '@/stores/places'
import Loading from '@/components/Loading.vue'
const route = useRoute()
const placeId = ref(route.params.id)
const place = usePlacesStore()
const isLoading = computed(() => place.$state.loading)

const getPlace = async () => {
  await place.getPlaceInfo(placeId.value)
}

getPlace()
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}
</style>
