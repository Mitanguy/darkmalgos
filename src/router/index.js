import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Account from '../views/Account'
import About from '../views/About'
import Contact from '../views/Contact'
import Shop from '../views/Shop'
import Product from '../views/ProductDetails'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/products/:id',
    name: 'product',
    component: Product,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
