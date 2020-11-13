import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'


import demo from '@/page/demo'
import list from '@/page/list'
import popup from '@/page/popup'

Vue.use(Router)

// 解决vue版本重复触发router事件
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  routes: [

    // { path: '/', name: 'Layout', component: Layout, meta: { title: 'Layout' }, redirect: "demo",
    //   children:[
    //     {path:'/demo',name: 'demo',component:demo,meta: { title: '组件1-demo' }},
    //     {path:'/list',name: 'list',component:list,meta: { title: '组件2-list' }},
    //   ]
    // },
    {path:'/',name: 'Layout',component:Layout,meta: { title: 'Layout' }},

    // 测试demo
    {path:'/demo',name: 'demo',component:Layout,meta: { title: '测试demo' }, redirect: "demo",
      children:[
        {path:'/demo',component: () => import('@/page/demo'),meta: { title: 'demo' }},
        {path:'/list',component: () => import('@/page/list'),meta: { title: '组件-list' }},
      ]
    },
    // 测试popup
    {path:'/popup',name: 'popup',component:Layout,meta: { title: '测试popup' }, redirect: "popup",
      children:[
        {path:'/popup',component: () => import('@/page/popup'),meta: { title: '组件-popup' }},
        {path:'/list',component: () => import('@/page/list'),meta: { title: '组件-list' }},
      ]
    },


  ]
})

router.beforeEach((to,from,next)=>{
  window.document.title = to.meta.title || '默认'
  next()
})

export default router