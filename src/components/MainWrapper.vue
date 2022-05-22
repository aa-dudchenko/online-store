<template>
  <div class="MainWrapper">
    <catalog-page/>
    <cart-page
     v-if="CART.length"
     :cart_data="CART"
    />
  </div>
</template>

<script>
import CatalogPage from './CatalogPage.vue'
import CartPage from './CartPage.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'MainWrapper',
  components: {
    CatalogPage,
    CartPage,
  },
  computed: { ...mapGetters ([ 'CART' ]) }
}
</script>

<style lang="scss">
  .MainWrapper {
    max-width: 1200px;
    padding: 0 20px;
    margin: 0 auto;
  }
</style>