import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store ({
state: {
  products: [],
  cart: [],
},

mutations: {
  SET_PRODUCTS_TO_STATE: ( state, products ) =>  {
    state.products = products
  },

  SET_TO_CART: ( state, product ) => { 
    const currentProduct = state.cart.find( item => item.article === product.article) 
    if (currentProduct) currentProduct.quantity++
    else state.cart.push(product)
    // currentProduct ? currentProduct.quantity++ : state.cart.push(product)
  },

  REMOVE_FROM_CART: (state, index) => {
    state.cart.splice(index, 1)
  }
},

actions: {
  GET_PRODUCTS_FROM_API ({commit}) {
    return axios('http://localhost:3000/products', {
      method: "GET"
    })
    .then( products => {
      commit ('SET_PRODUCTS_TO_STATE', products.data);
      // Для дальнейшего использования в компоненте:
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
  }
},

getters: {
  PRODUCTS (state) {
    return state.products;
  },

  CART (state) {
    return state.cart;
  }
}
}) 

export default store;