<template>
  <div>
    <!-- Header with Home and Cart buttons -->
    <Header />

    <!-- Main content area where pages will be rendered -->
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
/* Global or scoped styles if necessary */
</style>
