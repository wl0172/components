import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'
import demo from '@/page/demo'
import popup from '@/page/popup'

import list from '@/page/list'




import login from '@/page/login'
import waterDetail from '@/page/login/water_detail'
import buysDetail from '@/page/login/water_detail/buysDetail'
import qqMap from '@/page/login/water_detail/qqMap'
// import quickLogin from '@/page/login/quickLogin'


Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [

    { path: '/', component: Layout },
    { path: '/login', component: login },
    { path: '/waterDetail', component: waterDetail },
    { path: '/buysDetail', component: buysDetail },
    { path: '/qqMap', component: qqMap },
    
    


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
    // { path: '/list', name:'list', component: Layout,
    //   children: [{
    //     path: '/list',
    //     name: 'list',
    //     component: () => import('@/page/list'),
    //     meta: { title: 'list' }
    //   }]
    // },
  ]
})


