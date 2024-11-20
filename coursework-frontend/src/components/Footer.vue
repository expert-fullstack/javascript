<template>
    <footer class="bg-gray-200 text-gray-900 py-6 footer-font">
      <div class="container mx-auto px-4 text-center">
        <p class="text-sm">
          &copy; 2024 Your Company. All rights reserved.
        </p>
        <nav class="mt-4">
          <ul class="flex justify-center space-x-6">
            <li><a href="#" class="hover:underline">Privacy Policy</a></li>
            <li><a href="#" class="hover:underline">Terms of Service</a></li>
            <li><a href="#" class="hover:underline">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  </template>
  
  <script lang="ts">
  export default {
    name: 'Footer'
  }
  </script>
  
  <style scoped>
  .footer-font{
    font-family: 'Noto Serif', serif;
    font-weight: 200; /* Extra light */
  }
  </style>
  