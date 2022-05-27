import Vue from 'vue'
import Router from 'vue-router'
import CatalogPage from '../components/catalog/CatalogPage'
import CartPage from '../components/cart/CartPage'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: CatalogPage
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartPage,
      props: true
    }
  ]
})

export default router