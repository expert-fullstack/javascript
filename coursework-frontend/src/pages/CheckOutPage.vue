<template>
    <div class="min-h-[60vh] flex flex-col justify-center items-center" style="background-image: url('https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');">
      <div class="w-full py-2">
        <PaymentOptions />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import PaymentOptions from '../components/PaymentOptions.vue';
  
  export default defineComponent({
    name: 'CheckoutPage',
    components: {
      PaymentOptions,
    },
  });
  </script>
  