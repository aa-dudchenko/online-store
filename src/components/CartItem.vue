<template>
  <div class="CartItem">
    <img class="CatalogItem-Image" :src=" require(`../assets/images/${cart_item_data.image}`) " alt="img">
    <div class="CartItem-Info">
      <p class="CartItem-Name"> {{ cart_item_data.name }} </p>
      <p class="CartItem-Price"> {{ cart_item_data.price }} </p>
      <p class="CartItem-Article"> {{ cart_item_data.article }} </p>
    </div>
    <div class="CartItem-Quantity">
       <p class="CartItem-Quantity_text"> Кол-во: </p>
       <span class="CartItem-Quantity_num" > {{ cart_item_data.quantity }} </span>
    </div>
    <button class="CartItem-Btn" @click="deleteFromCart"> Убрать товар из корзины </button>
  </div>
</template>

<script>

export default {
  name: 'CartItem',
  props: {
    cart_item_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  mounted () {
    // Добавление доп. ключа в обьект массива CART, для обозначения кол-ва товара в корзине
    this.$set( this.cart_item_data, 'quantity', 1 ) // Без set не будет реактивности
  },
  methods: {
    deleteFromCart () {
      this.$emit( 'deleteFromCart' )
    }
  },
}
</script>

<style lang="scss">
@import "../assets/styles/styles.scss";

.CartItem {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;

  box-shadow: 0 0 8px 0 #c0c0c0;
  padding: $padding;
  margin-bottom: $padding;
}

</style>