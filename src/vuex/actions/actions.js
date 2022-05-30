import axios from 'axios';

export default {
  // РЕЗЕРВНЫЙ ЛОКАЛЬНЫЙ API ИЗ db.json: http://localhost:3000/products

  GET_PRODUCTS_FROM_API ({commit}) {
    return axios.get('https://626ffe2722c706a0ae7066cb.mockapi.io/products')
    .then( products => {
      commit ('SET_PRODUCTS_TO_STATE', products.data);
      return products.data;
    })
    .catch( (error) => {
      console.log(error);
      return error;
    })
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