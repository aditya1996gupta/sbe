import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/home.vue'
import Foo from './components/foo.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes: [{
    path: '/',
    component: Home
  },
  {
    path: '/foo',
    component: Foo
  }
  ]
})
