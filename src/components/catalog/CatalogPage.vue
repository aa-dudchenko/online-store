<template>
  <div class="CatalogPage">

      <div class="CatalogPage-LinkToCart">
        <v-btn
         color="#3fb884"
         :to = "{ name: 'cart', params: { cart_data: CART } }"
        >
          <v-icon left color="#fff"> shopping_cart </v-icon>
          <span class="CatalogPage-LinkToCart_text"> Перейти в корзину <span class="CatalogPage-LinkToCart_num"> {{ CART.length }} </span> </span>
        </v-btn>
      </div>

      <select-block
        :options="options"
        :selected="selected"
        @selectOption="sortCategory"
      />

    <div class="CatalogPage-List">
       <catalog-item
        v-for="product in filteredProducts"
        :key="product.article"
        :product_data="product"
        @addToCart = "addToCart"
       />
    </div>

  </div>
</template>


<script>
import CatalogItem from './CatalogItem.vue'
import SelectBlock from '../SelectBlock.vue'
import { mapGetters,  mapActions } from 'vuex'

export default {
  name: 'CatalogPage',

  data () {
    return {
      // Категории для селекта
      options: [
        {name: 'Все товары',},
        {name: 'Мужские',},
        {name: 'Женские',},
        {name: 'Aviator',},
        {name: 'Wayfarer',},
        {name: 'Круглые',},
        {name: 'Квадратные',},
        {name: 'Спортивные',},
      ],
      selected: 'Все товары',
      sortedProducts: []
    }
  },

  computed: {
    ...mapGetters(['PRODUCTS', 'CART']),

    filteredProducts () {
      if (this.sortedProducts.length) {
        return this.sortedProducts
      } else { return this.PRODUCTS }
    },
  },

  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART',]),

    addToCart (data) {
      // console.log(data);
      this.ADD_TO_CART(data)
    },

    sortCategory (category) {
      this.selected = category.name
      this.sortedProducts = []
      this.sortedProducts = this.PRODUCTS.filter( item => item.category === category.name || item.glassesType === category.name )
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
    SelectBlock,
  },
}
</script>


<style lang="scss">
@import "../../assets/styles/styles.scss";

.CatalogPage {
  margin-top: 80px;

  &-List {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
  }

  &-LinkToCart {
    position: absolute;
    top: 16px;
    right: 20px;
    &_text {
      color: #fff;
      margin-right: 10px;
      position: relative;  
      font-weight: 500;
    }
    
    &_num {
      position: absolute;
      top: -6px;
      left: -17px;
      font-size: 12px;
    }
  }

}

</style>