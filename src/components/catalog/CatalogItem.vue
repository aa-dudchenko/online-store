<template>
<div>
  <div class="CatalogItem">
    <img class="CatalogItem-Image" :src=" require(`../../assets/images/${product_data.image}`) " alt="img">
    <p class="CatalogItem-Name"> {{product_data.name}} </p>
    <p class="CatalogItem-Price"> {{product_data.price}} ₽ </p>
    <button class="CatalogItem-Btn_add btn" @click="addToCart"> Добавить в корзину </button>
  </div>
</div>
  
</template>


<script>
export default {
  name: 'CatalogItem',

  props: {
    product_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  methods: {
    addToCart () {
      this.$emit( 'addToCart', this.product_data )
    }
  },
}
</script>


<style lang="scss">
@import "../../assets/styles/styles.scss";

.CatalogItem {
  display: flex;
  flex-direction: column;
  align-items: center;

   box-shadow: 0 0 8px 0 #c0c0c0;
   padding: $padding;
  //  max-height: 300px;
   min-width: 150px;
  &-Image {width: 100px; height: 70px;}
  }

</style>