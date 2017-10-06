// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import store from './store'
import util from './libs/util'
import { routers } from './router'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ElementUI)

Vue.config.productionTip = false

function guardRoute (route, redirect, next) {
  if (window.confirm(`Navigate to ${route.path}?`)) {
    next()
  } else if (window.confirm(`Redirect to /baz?`)) {
    redirect('/baz')
  }
}

// 路由配置
const RouterConfig = {
  mode: 'hash',
  routes: routers
}
const router = new VueRouter(RouterConfig)

router.beforeEach((route, redirect, next) => {
  util.title(route.meta.title)

  if (route.matched.some(m => m.meta.needGuard)) {
    guardRoute(route, redirect, next)
  } else {
    next()
  }
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
