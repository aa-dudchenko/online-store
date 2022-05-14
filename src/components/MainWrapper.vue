<template>
  <div class="MainWrapper">
    <h1 class="MainWrapper__title">{{ title }}</h1>
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
    return {
      title: "Main wrapper"
    }
  },
  methods: {},
}
</script>

<style lang="scss">
  .MainWrapper {
    display: flex;
    justify-content: center;
    align-items: center; 
    /* max-width: 900px; */
     padding: 0 20px;
    max-width: 1200px;
    margin: 0 auto;
    
    &__title {
      display: none;
    }
  }
</style>