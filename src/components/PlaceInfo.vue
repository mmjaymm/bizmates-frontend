<template>
  <section id="destination" class="mb-20">
    <h2 class="text-3xl font-semibold mb-8">Destination Spotlight</h2>
    <div
      class="bg-gray-600 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-8 flex flex-col md:flex-row items-center"
    >
      <img
        v-if="props.destination?.photos && props.destination.photos.length > 0"
        :src="props.destination?.photos[0]?.image"
        :alt="props.destination?.name"
        class="w-full md:w-1/2 h-64 object-cover rounded-lg mb-6 md:mb-0 md:mr-8"
      />
      <div>
        <h3 class="text-2xl font-semibold mb-4">{{ props.destination.name }}</h3>
        <p class="mb-4">{{ props.destination?.location?.formatted_address }}</p>
        <div class="">
          <h4 class="font-semibold mb-2">Information</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At error vitae voluptate in,
            itaque unde a aspernatur.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  destination: Object
})
</script>
