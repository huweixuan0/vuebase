// 当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。

// 结合 Vue 的异步组件 (opens new window)和 Webpack 的代码分割功能 (opens new window)，轻松实现路由组件的懒加载。
//为了消除# 采用history模式，history 模式有个问题就是，异步路由没有缓存在页面中，第一次进入页面会找不到，在vue.config.js，devServer: { historyApiFallback: true }
import Vue from 'vue'
import Router from 'vue-router'

// import home from '@/pages/home/index'
// import about from '@/pages/about/index'
// import login from '@/pages/login/index'

const home = () => import('@/pages/home/index')
const about = () => import('@/pages/about/index')
const login = () => import('@/pages/login/index')

Vue.use(Router)
//页面刷新时，重新赋值token
import store from '@/common/vuex/vuex';
import { request } from '@/common/http/http';
if (sessionStorage.getItem('token')) {
  store.commit('set_token', sessionStorage.getItem('token'))
  request('get', '/auth/token', null).then(res => {
    store.commit("set_userInfo", res.data)
  })
} else {
}
const router = new Router({
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
      component: login,
      meta:{
        showNav: true
      }
    }
  ]
})
//路由守卫
router.beforeEach((to, from, next) => {
  //路由中设置的needLogin字段就在to当中 
  //已经登陆
  if (store.state.token != "") {
    if (to.path === '/login') {
      //登录状态下 访问login.vue页面 会跳到index.vue
      next({ path: '/' });
    } else {
      next();
    }
  }
  // console.log(to.path) //每次跳转的路径
  else {
    // 如果没有session ,访问任何页面。都会进入到 登录页
    if (to.path === '/login') { // 如果是登录页面的话，直接next() -->解决注销后的循环执行bug
      next();
    } else { // 否则 跳转到登录页面
      console.log("用户未登录")
      next({ path: '/login' });
    }
  }
})
export default router
