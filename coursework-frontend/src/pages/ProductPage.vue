<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Products</h1>
      <div class="grid grid-cols-3 gap-4">
        <div v-for="product in products" :key="product.id" class="border p-4 rounded-lg">
          <h2 class="font-semibold mb-2">{{ product.name }}</h2>
          <p class="mb-2">{{ product.description }}</p>
          <p class="text-lg font-bold mb-2">{{ product.price | currency }}</p>
          <button 
            @click="addToCart(product)" 
            class="bg-black/80 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import { useCartStore } from '../stores/cart'
  
  export default defineComponent({
    setup() {
      const cartStore = useCartStore()
  
      const products = [
        { id: 1, name: 'Product A', description: 'A great product', price: 19.99 },
        { id: 2, name: 'Product B', description: 'Another great product', price: 29.99 },
        { id: 3, name: 'Product C', description: 'An amazing product', price: 39.99 },

        { id: 4, name: 'Product A', description: 'A great product', price: 19.99 },
        { id: 5, name: 'Product B', description: 'Another great product', price: 29.99 },
        { id: 6, name: 'Product C', description: 'An amazing product', price: 39.99 },

        { id: 7, name: 'Product A', description: 'A great product', price: 19.99 },
        { id: 8, name: 'Product B', description: 'Another great product', price: 29.99 },
        { id: 9, name: 'Product C', description: 'An amazing product', price: 39.99 },

        { id: 10, name: 'Product A', description: 'A great product', price: 19.99 },
        { id: 11, name: 'Product B', description: 'Another great product', price: 29.99 },
        { id: 12, name: 'Product C', description: 'An amazing product', price: 39.99 },

        { id: 13, name: 'Product A', description: 'A great product', price: 19.99 },
        { id: 14, name: 'Product B', description: 'Another great product', price: 29.99 },
        { id: 15, name: 'Product C', description: 'An amazing product', price: 39.99 },
      ]
  
      const addToCart = (product: any) => {
        cartStore.addToCart(product)
      }
  
      return { products, addToCart }
    }
  })
  </script>
  
  <style scoped>
  /* Add styling if needed */
  </style>
  