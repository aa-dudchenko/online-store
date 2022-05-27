export default {

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
  },

  DECREMENT: (state, index) => {
    if (state.cart[index].quantity >= 1) {
      state.cart[index].quantity--
    }
    
  },
  INCREMENT: (state, index) => {
    state.cart[index].quantity++
  }
  
}