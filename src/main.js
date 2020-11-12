// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vant from 'vant';
import 'vant/lib/index.css';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// import "@/system/rem.js"

import store from './store/index'// 状态引入

import customFilter from './filters'// 过滤器引入

// 过滤器挂载 
Object.keys(customFilter).forEach((key)=>{ Vue.filter(key,customFilter[key]) })


Vue.directive('money',{
  // 当被绑定的元素插入到 DOM 中时……
  inserted:function(el){
    // 聚焦元素
    // console.log(el)
    // console.log(el.innerHTML)
    el.innerHTML = 'money指令'
  },
})


Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(vant);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
