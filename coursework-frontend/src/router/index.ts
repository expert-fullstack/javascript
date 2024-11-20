import { createRouter, createWebHistory } from 'vue-router'
import ProductPage from '../pages/ProductPage.vue'
import CartPage from '../pages/CartPage.vue'
import Home from '../pages/Home.vue'
import CheckOutPage from '../pages/CheckOutPage.vue'
const routes = [
    { path: '/', component: Home },
  { path: '/product', component: ProductPage },
  { path: '/cart', component: CartPage },
  { path: '/check-out-page', component: CheckOutPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
