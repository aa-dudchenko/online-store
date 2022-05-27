<template>
  <div class="CartPage">
    <h2>Cart</h2>
    <router-link :to = "{ name: 'catalog' }"> 
      <div class="CatalogPage-LinkToCart">Перейти в каталог </div>
    </router-link>
    <cart-item
     v-for="(item, index) in cart_data"
     :key="item.article" 
     :cart_item_data = "item"
     @deleteFromCart = "deleteFromCart(index)"
     @decrement="decrement(index)"
     @increment="increment(index)"
    />
    <p v-if="!cart_data.length">Ваша корзина пуста</p>
    <div class="CartPage-Total">
      <p class="CartPage-Total_title">Итоговая стоимость:</p>
      <span class="CartPage-Total_num">{{ cartTotalCost }} рублей</span>
    </div>
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
  computed: {
    // Общая стоимость товаров:
    cartTotalCost () {
      return this.cart_data.map(item => item.price * item.quantity)
      .reduce((a, v) => a + v, 0);
    }
  },
  methods: {
    ...mapActions (['DELETE_FROM_CART','DECREMENT_QUANTITY','INCREMENT_QUANTITY']),
    deleteFromCart (index) {
      // console.log(index)
      this.DELETE_FROM_CART(index)
    },
    decrement(index) {
      this.DECREMENT_QUANTITY(index)
    },
    increment(index) {
      this.INCREMENT_QUANTITY(index)
    }
  }
  
}
</script>

<style lang="scss">
@import "../assets/styles/styles.scss";

.CartPage {
  // background-color: aqua;

  &-Total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgb(58, 192, 51);
    padding: 40px;
    color: #fff;
    text-align: center;
    text-shadow: #000 1px 0 10px;
    font-size: 22px;
    font-weight: 600;
    &_title { margin-bottom: 10px; }
    &_num { color:yellow }
  }
}

</style>