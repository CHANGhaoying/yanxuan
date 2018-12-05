import Vue from 'vue'
import Router from 'vue-router'

import Fenlei from '@/views/fenlei'
import Index from '@/views/index'
import Cart from '@/views/cart'
import Personal from '@/views/personal'
import Detail from '@/views/detail'
import Order from '@/views/order/sureorder'
import Myadr from '@/views/myadr/myadr'
import Addadr from '@/views/myadr/addadr'
import Login from '@/components/login/login'
import Pay from '@/views/pay/pay'
import Myod from '@/views/myod/myod'
import pj from '@/views/myod/pingjia'
import kanjia from '@/components/kanjia'
Vue.use(Router)

export default new Router({
  //mode:"history",
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
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/myadr',
      name: 'Myadr',
      component:Myadr
    },
    {
      path: '/addadr',
      name: 'Addadr',
      component:Addadr
    },
    {
      path: '/login',
      name: 'Login',
      component:Login
    },
    {
      path: '/pay',
      name: 'Pay',
      component:Pay
    },
    {
      path: '/myod',
      name: 'Myod',
      component:Myod
    },
    {
      path: '/pj',
      name: 'pj',
      component:pj
    },
    {
      path: '/kanjia',
      name: 'kanjia',
      component:kanjia
    },
  ]
})
