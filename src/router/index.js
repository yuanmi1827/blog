import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from 'components/login'
import Reg from 'components/reg'
import Forget from 'components/forget'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/reg',
      component: Reg
    },
    {
      path: '/forget',
      component: Forget
    }
  ]
})