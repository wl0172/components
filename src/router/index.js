import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'


import demo from '@/page/demo'
import popup from '@/page/popup'


Vue.use(Router)

export default new Router({
  routes: [

    // { path: '/', name: 'Layout', component: Layout},



    { path: '/', name:'demo测试', component: Layout,
      children: [{
        path: '/',
        name: '首页',
        component: () => import('@/page/demo'),
        meta: { title: '首页' }
      }]
    },
    { path: '/popup', name:'popup弹窗', component: Layout,
      children: [{
        path: '/popup',
        name: '首页',
        component: () => import('@/page/popup'),
        meta: { title: 'popup' }
      }]
    },
  ]
})
