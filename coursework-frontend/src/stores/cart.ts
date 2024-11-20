import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as Array<any>
  }),
  actions: {
    addToCart(product: any) {
      this.cart.push(product)
    },
    removeFromCart(id: number) {
      this.cart = this.cart.filter((item) => item.id !== id)
    }
  }
})
