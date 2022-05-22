<template>
  <div class="CatalogPage">
    <router-link :to = "{ name: 'cart', params: { cart_data: CART } }"> 
      <div class="CatalogPage-LinkToCart">Перейти в корзину: {{ CART.length }} </div>
    </router-link>
    
    <h2>Catalog</h2>
    <div class="CatalogPage-List">
       <catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart = "addToCart"
       />
    </div>
  </div>
</template>

<script>
import CatalogItem from './CatalogItem.vue'
import { mapGetters,  mapActions } from 'vuex'

export default {
  name: 'CatalogPage',

  computed: {
    ...mapGetters(['PRODUCTS', 'CART'])
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART',]),
    addToCart (data) {
      // console.log(data);
      this.ADD_TO_CART(data)
    }
  },
  mounted () {
    this.GET_PRODUCTS_FROM_API()
    .then( response => { 
      if(response) {
        console.log('DATA RECEIVED')
      } else { console.log('DATA WAS NOT RECEIVED') }
     }) 
  },
  components: {
    CatalogItem,
  },
}
</script>

<style lang="scss">
@import "../assets/styles/styles.scss";

.CatalogPage {
  margin-top: 20px;
  &-List {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 8px;
  }
  &-LinkToCart {
    position: absolute;
    top: 0;
    right: 0;
    padding: $padding;
    border: 1px solid #000;
    cursor: pointer;
  }
}

</style>