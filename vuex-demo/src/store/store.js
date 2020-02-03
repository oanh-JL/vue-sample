import Vuex from 'vuex'

export const store = new Vuex.Store({
  state: {
    products: [
      { name: 'Banana', price: 30 },
      { name: 'orange', price: 40 },
      { name: 'apple', price: 39 }
    ]
  }
}
)
