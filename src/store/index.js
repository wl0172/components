import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  showFooter: true,
  changableNum: 0,
  count: 0,
};

const getters = {
  isShow(state) {
    return state.showFooter
  },
  getChangedNum(state) {
    return state.changableNum
  },

  getTodoById: (state) => (id) => {

  },
  // 等同于下面这个
  // getTodoById:function(state){
  // 	return function(id){

  // 	}
  // }
}

const mutations = {
  show(state) {
    state.showFooter = true
  },
  hide(state) {
    state.showFooter = false
  },
  newNum(state, n) {
    state.changableNum++
  },

  // 加1
  INCREMENT(state) {
    state.count++;
  },
  // 减1
  DECREMENT(state) {
    state.count--
  }

}

const actins = {
  increment(context) {
    context.commit("INCREMENT");
  },
  decrement(context) {
    context.commit("DECREMENT");
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actins,

})

export default store;
