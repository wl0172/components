import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'

import Layout from '@/layout'

import login from '@/page/login'


import demo from '@/page/demo'
import list from '@/page/list'
import popup from '@/page/popup'
import lazyLoading from '@/page/lazyLoading'
import upload from '@/page/upload'
import magnifier from '@/page/magnifier'
import wangeditor from '@/page/wangeditor'






Vue.use(Router)

// 解决vue版本重复触发router事件
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  routes: [

    {path:'/',name: 'Layout',component:Layout,meta: { title: 'Layout' }, redirect: "demo"},
    {path:'/login',name: 'login',component:login,meta: { title: 'login' }},

    // 测试demo
    {path:'/',name: '',component:Layout,meta: { title: '测试demo' }, redirect: "",
      children:[
        {path:'/demo',component: () => import('@/page/demo'),meta: { title: 'demo' }},
        {path:'/list',component: () => import('@/page/list'),meta: { title: 'list' }},
      ]
    },
    // 测试组件
    {path:'/',name: '',component:Layout,meta: { title: '测试组件' }, redirect: "",
      children:[
        {path:'/popup',component: () => import('@/page/popup'),meta: { title: '弹窗' }},
        {path:'/lazyLoading',component: () => import('@/page/lazyLoading'),meta: { title: '懒加载' }},
        {path:'/upload',component: () => import('@/page/upload'),meta: { title: '上传' }},
        {path:'/magnifier',component: () => import('@/page/magnifier'),meta: { title: '放大镜' }},
        {path:'/wangeditor',component: () => import('@/page/wangeditor'),meta: { title: '富文本' }},
      ]
    },
  ]
})

const whiteList = ['login']

router.beforeEach((to,from,next)=>{
  window.document.title = to.meta.title || '默认'

  // console.log(localStorage.getItem('userName'))

  // 从缓存中获取用户是否登录
  // if(localStorage.getItem('userName')){
  //   store.state.userLogin.name = localStorage.getItem('userName')
  // }

  if(localStorage.getItem('userName')){
    if(to.meta.title == 'login'){
      next({ path: '/' })
    }else{
      next()
    }
  }else{
    if(whiteList.indexOf(to.meta.title) !== -1){
      next()
    }else{
      next('/login')
    }
  }
  // next()
})

export default router