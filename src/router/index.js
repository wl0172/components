import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'
import demo from '@/page/demo'
import list from '@/page/list'

Vue.use(Router)

const router = new Router({
  routes: [

    { path: '/', name: 'Layout', component: Layout, meta: { title: '菜单' },
      children:[
        {path:'/demo',component:demo,meta: { title: '组件1-demo' }},
        {path:'/list',component:list,meta: { title: '组件2-list' }},
      ]
    },

  ]
})

router.beforeEach((to,from,next)=>{
  window.document.title = to.meta.title || '默认'
  next()
})

export default router