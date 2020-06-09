import Vue from 'vue'
import Router from 'vue-router'

// import Layout from '@/layout'
// import demo from '@/page/demo'
// import popup from '@/page/popup'

import login from '@/page/login'
import quickLogin from '@/page/login/quickLogin'


Vue.use(Router)

export default new Router({
  routes: [

    { path: '/', component: login },
    { path: '/quickLogin', component: quickLogin },




    // { path: '/', name:'demo测试', component: Layout,
    //   children: [{
    //     path: '/',
    //     name: '首页',
    //     component: () => import('@/page/demo'),
    //     meta: { title: '首页' }
    //   }]
    // },
    // { path: '/popup', name:'popup弹窗', component: Layout,
    //   children: [{
    //     path: '/popup',
    //     name: '首页',
    //     component: () => import('@/page/popup'),
    //     meta: { title: 'popup' }
    //   }]
    // },
  ]
})
