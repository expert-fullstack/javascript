<template>
  <div class="container min-h-screen mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Your Cart</h1>
    <div v-if="cart.length > 0">
      <div v-for="item in cart" :key="item.id" class="border p-4 rounded-lg mb-2 shadow-lg">
        <h2 class="font-semibold text-xl">{{ item.name }}</h2>
        <p class="text-gray-700">{{ item.description }}</p>
        <p class="text-lg font-bold text-green-600">{{ item.price | currency }}</p>
        <button 
          @click="removeFromCart(item.id)" 
          class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 mt-2 transition duration-300 ease-in-out"
        >
          Remove
        </button>
      </div>
      <div class="font-bold text-xl mt-4">Total: {{ totalPrice | currency }}</div>
      <router-link to="/check-out-page">
        <button class="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-800 mt-4 transition duration-300 ease-in-out">
          Checkout
        </button>
      </router-link>
    </div>
    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useCartStore } from '../stores/cart';

export default defineComponent({
  setup() {
    const cartStore = useCartStore();

    const cart = computed(() => cartStore.cart);
    const totalPrice = computed(() =>
      cartStore.cart.reduce((total, item) => total + item.price, 0)
    );

    const removeFromCart = (id: number) => {
      cartStore.removeFromCart(id);
    };

    return { cart, totalPrice, removeFromCart };
  },
});
</script>

<style scoped>
/* Add styling if needed */
</style>
