<template>
    <div class="min-h-screen flex justify-center items-start">
      <div class="max-w-4xl mx-auto bg-white shadow-lg p-6 rounded-lg w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Left Side: Form -->
          <div>
            <h2 class="text-2xl font-semibold mb-4">Get started</h2>
            <form @submit.prevent="submitForm">
              <!-- Email -->
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700">Email address</label>
                <input
                  v-model="email"
                  type="email"
                  class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
                <div class="mt-2">
                  <label class="inline-flex items-center">
                    <input type="checkbox" class="form-checkbox" />
                    <span class="ml-2 text-gray-600">Yes, send me promotions and news.</span>
                  </label>
                </div>
              </div>
  
              <!-- PayPal Button -->
              <div class="mb-6">
                <h3 class="text-lg font-medium">Express checkout</h3>
                <button class="mt-2 w-full p-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
                  PayPal
                </button>
              </div>
  
              <!-- Payment Method -->
              <div class="mb-6">
                <h3 class="text-lg font-medium">Payment method</h3>
                <div class="flex items-center mb-4">
                  <input type="radio" name="payment" checked class="mr-2 form-radio" /> <span>Card</span>
                </div>
  
                <!-- Card Details -->
                <div class="grid grid-cols-2 gap-4">
                  <input
                    v-model="cardNumber"
                    type="text"
                    class="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Card number"
                    required
                  />
                  <input
                    v-model="expiry"
                    type="text"
                    class="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="MM/YY"
                    required
                  />
                </div>
  
                <div class="grid grid-cols-2 gap-4 mt-4">
                  <input
                    v-model="cvv"
                    type="text"
                    class="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="CVV"
                    required
                  />
                  <input
                    v-model="zipCode"
                    type="text"
                    class="block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="ZIP Code"
                    required
                  />
                </div>
  
                <div class="mt-4">
                  <label class="inline-flex items-center">
                    <input type="checkbox" class="form-checkbox" />
                    <span class="ml-2">Save payment method for future purchases</span>
                  </label>
                </div>
              </div>
  
              <!-- Address -->
              <div class="mb-6">
                <h3 class="text-lg font-medium">Address</h3>
                <input
                  v-model="address"
                  type="text"
                  class="block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Full name"
                  required
                />
                <input
                  v-model="city"
                  type="text"
                  class="block w-full mt-4 p-2 border border-gray-300 rounded-md"
                  placeholder="City"
                  required
                />
              </div>
            </form>
          </div>
  
          <!-- Right Side: Order Summary -->
          <div class="bg-gray-50 p-4 rounded-lg shadow">
            <h2 class="text-2xl font-semibold mb-4">Order Summary</h2>
            <div class="flex justify-between mb-4">
              <div class="text-gray-700">Drawing from Line to Life</div>
              <div class="text-gray-700">$115</div>
            </div>
  
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700">Coupon code</label>
              <div class="flex">
                <input
                  v-model="coupon"
                  type="text"
                  class="block w-full p-2 border border-gray-300 rounded-md"
                />
                <button class="ml-2 p-2 bg-gray-800 text-white rounded-md">Apply</button>
              </div>
            </div>
  
            <div class="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>$115.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    data() {
      return {
        email: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
        zipCode: "",
        address: "",
        city: "",
        coupon: "",
      };
    },
    methods: {
      submitForm() {
        // Handle form submission
        console.log("Checkout details", this.$data);
      },
    },
  });
  </script>
  
  <style scoped>
  /* You can add custom styles if needed */
  </style>
  