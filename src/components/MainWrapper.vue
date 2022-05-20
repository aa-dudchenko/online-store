<template>
  <div class="MainWrapper">
    <catalog-page/>


    <!-- <cart-page/> -->
  </div>
</template>

<script>
import CatalogPage from './CatalogPage.vue'
// import CartPage from './CartPage.vue'

export default {
  name: 'MainWrapper',
  components: {
    CatalogPage,
    // CartPage,
  },
  props: {},
  data () {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss">
  .MainWrapper {
    max-width: 1200px;
    padding: 0 20px;
    margin: 0 auto;
  }
</style>