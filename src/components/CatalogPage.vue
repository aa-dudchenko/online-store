<template>
  <div class="CatalogPage">
    <h2>Catalog</h2>
    <div class="CatalogPage-List">
       <catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @sendDataToParent = "showChildArticle"
       />
    </div>
  </div>
</template>

<script>
import CatalogItem from './CatalogItem.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CatalogPage',
   data () {
    return {
     

    }
  },
  computed: {
    ...mapGetters(['PRODUCTS'])
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API']),
    showChildArticle (data) {
      console.log(data)
    }
  },
  mounted () {
    this.GET_PRODUCTS_FROM_API()
    .then( response => { 
      if(response.data) {
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
  &-List {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 8px;
  }
}

</style>