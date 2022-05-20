import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store ({
state: {
  products: [],
},
mutations: {
  SET_PRODUCTS_TO_STATE: (state, products) =>  {
    state.products = products
  }
},
actions: {
  GET_PRODUCTS_FROM_API({commit}) {
    return axios('http://localhost:3000/products', {
      method: "GET"
    })
    .then( products => {
      commit('SET_PRODUCTS_TO_STATE', products.data);
      // Для дальнейшего использования в компоненте:
      return products.data;
    })
    .catch( (error) => {
      console.log(error);
      // Для дальнейшего использования в компоненте:
      return error;
    })
  }
},
getters: {
  PRODUCTS (state) {
    return state.products;
  }
}
}) 

export default store;