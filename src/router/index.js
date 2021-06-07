import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/index'
import about from '@/pages/about/index'
import login from '@/pages/login/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
