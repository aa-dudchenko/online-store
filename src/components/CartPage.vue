<template>
  <div class="CartPage">
    <h2>Cart</h2>
    <router-link :to = "{ name: 'catalog' }"> 
      <div class="CatalogPage-LinkToCart">Перейти в каталог </div>
    </router-link>
    <p v-if="!cart_data.length">Ваша корзина пуста</p>
    <cart-item
     v-for="(item, index) in cart_data"
     :key="item.article" 
     :cart_item_data = "item"
     @deleteFromCart = "deleteFromCart(index)"
    />
  </div>
</template>

<script>
import CartItem from './CartItem.vue'
import { mapActions } from 'vuex'

export default {
  name: 'CartPage',
  props: {
    cart_data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    CartItem
  },
  methods: {
    ...mapActions (['DELETE_FROM_CART']),
    deleteFromCart (index) {
      // console.log(index)
      this.DELETE_FROM_CART(index)
    }
  }
  
}
</script>

<style lang="scss">


</style>