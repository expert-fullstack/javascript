<template>
    <header
      :class="headerClass"
      class="transition-all duration-300 sticky top-0 z-10 flex justify-between items-center p-4 header"
    >
      <nav>
        <router-link
          to="/"
          class="text-lg font-semibold flex items-center hover:underline"
        >
          <font-awesome-icon icon="fa-solid fa-house" class="mr-2" />
          Home
        </router-link>
      </nav>
      <div class="flex direction-column gap-5">
        <router-link
          to="/product"
          class="text-lg font-semibold flex items-center hover:underline"
        >
          Courses
        </router-link>
        <router-link to="/cart" class="relative flex items-center">
          <font-awesome-icon icon="fa-solid fa-shopping-cart" class="mr-2" />
          <span
            class="bg-black text-white rounded-full px-1 py-0 font-bold absolute -top-2 -right-2 size-4 text-xs"
            v-if="cartCount > 0"
          >
            {{ cartCount }}
          </span>
        </router-link>
      </div>
    </header>
  </template>
  
  <script lang="ts">
  import { computed, ref, onMounted, onUnmounted } from "vue";
  import { useCartStore } from "../stores/cart";
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { faHouse, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
  import debounce from "lodash/debounce";
  
  // Add icons to the library
  library.add(faHouse, faShoppingCart);
  
  export default {
    components: {
      FontAwesomeIcon,
    },
    setup() {
      const cartStore = useCartStore();
      const cartCount = computed(() => cartStore.cart.length);
  
      // Scroll-related state
      const isScrolled = ref(false);
  
      // Debounced function to handle scroll event
      const handleScroll = debounce(() => {
        if (window.scrollY > 50) {
          isScrolled.value = true;
        } else {
          isScrolled.value = false;
        }
      }, 50); // Adjust debounce delay as needed
  
      // Add scroll event listener when the component is mounted
      onMounted(() => {
        window.addEventListener("scroll", handleScroll);
      });
  
      // Remove scroll event listener when the component is unmounted
      onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll);
      });
  
      // Dynamically change the header class based on scroll state
      const headerClass = computed(() => {
        return isScrolled.value
          ? "bg-white text-black h-16 shadow-lg" // Smaller white header with shadow
          : "bg-transparent text-black h-24"; // Larger transparent header
      });
  
      return { cartCount, headerClass };
    },
  };
  </script>
  
  <style scoped>
  .header {
    font-family: 'Noto Serif', serif;
    font-weight: 200;
    transition: all 0.3s ease-in-out;
  }
  </style>
  