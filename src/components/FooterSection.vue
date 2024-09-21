<template>
  <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-between">
        <div class="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 class="text-xl font-bold mb-4">Travellers</h3>
          <p class="text-gray-400">
            Discover the beauty and culture of Japan with our comprehensive travel guide.
          </p>
        </div>
        <div class="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-blue-400">Home</a></li>
            <li><a href="#" class="hover:text-blue-400">Destinations</a></li>
            <li><a href="#" class="hover:text-blue-400">Travel Tips</a></li>
            <li><a href="#" class="hover:text-blue-400">About Us</a></li>
          </ul>
        </div>
        <div class="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 class="text-lg font-semibold mb-4">Contact Us</h4>
          <ul class="space-y-2">
            <li class="flex items-center"><Mail class="mr-2" /> info@japantravellers.com</li>
            <li class="flex items-center"><Phone class="mr-2" /> +81 X-XXXX-XXXX</li>
            <li class="flex items-center"><MapPin class="mr-2" /> Tokyo, Japan</li>
          </ul>
        </div>
        <div class="w-full md:w-1/4">
          <h4 class="text-lg font-semibold mb-4">Follow Us</h4>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-blue-400"><Facebook /></a>
            <a href="#" class="hover:text-blue-400"><Twitter /></a>
            <a href="#" class="hover:text-blue-400"><Instagram /></a>
            <a href="#" class="hover:text-blue-400"><Youtube /></a>
          </div>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>&copy; 2024 Japan Travel. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-vue-next'
</script>
