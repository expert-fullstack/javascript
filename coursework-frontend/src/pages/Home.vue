<template>
    <div>
      <!-- Hero Section -->
      <section class="relative bg-cover bg-center z-0 mt-[-7rem] h-screen" style="background-image: url('https://plus.unsplash.com/premium_photo-1661456342021-faa4a2ac84f1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');">
        <div class="absolute inset-0 bg-blue-100 bg-opacity-75"></div>
        <div class="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Everyone can learn.
          </h1>
          <p class="text-xl md:text-2xl text-gray-700 max-w-lg mx-auto mb-8">
            Our online learning lessons with printable curriculum can show you how.
          </p>
          <div class="flex space-x-4">
            <button @click="navigateToProduct" class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-lg">
              Try Coursework
            </button>
            <button class="bg-transparent hover:underline text-lg text-gray-900">
              Learn More
            </button>
          </div>
        </div>
      </section>
  
      <!-- Optional content sections can go here -->
      <!-- Add more sections if needed below -->
    </div>
  </template>
  
  <script lang="ts">
  import { useRouter } from 'vue-router'
  
  export default {
    name: 'Home',
    setup() {
      const router = useRouter()
  
      const navigateToProduct = () => {
        router.push('/product') // Navigate to the /product page
      }
  
      return {
        navigateToProduct
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any specific styles if needed */
  </style>
  