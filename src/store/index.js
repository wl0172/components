import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters :{
    aaa: function(){return 111}
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store