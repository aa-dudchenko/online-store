import axios from 'axios';

export default {

  async GET_PRODUCTS_FROM_API ({commit}) {
    try {
      const products = await axios('http://localhost:3000/products', {
        method: "GET"
      });
      commit('SET_PRODUCTS_TO_STATE', products.data);
      return products.data; // Для дальнейшего использования в компоненте
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  ADD_TO_CART ( {commit}, product ) {
    // console.log(product);
    commit ('SET_TO_CART', product);
  },
  
  DELETE_FROM_CART ( {commit}, index ) {
    commit ('REMOVE_FROM_CART', index)
  },

  // Изменение кол-ва товара в корзине (-+):
  DECREMENT_QUANTITY ({commit}, index) {
    commit ('DECREMENT', index)
  },

  INCREMENT_QUANTITY ({commit}, index) {
    commit ('INCREMENT', index)
  }

}