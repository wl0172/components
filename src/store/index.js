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

// State：定义了应用状态的数据结构，可以在这里设置默认的初始状态。
// Getter：允许组件从 Store 中获取数据，mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性。
// Mutation：是唯一更改 store 中状态的方法，且必须是同步函数。
// Action：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作。
// Module：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中。