import Vue from 'vue'
import Router from 'vue-router'
import Fenlei from '@/views/fenlei'
import Index from '@/views/index'
import Cart from '@/views/cart'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/fenlei',
      name: 'Fenlei',
      component: Fenlei
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }

  ]
})
