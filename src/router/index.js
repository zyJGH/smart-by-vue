import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import smart from '@/components/smart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '登录',
      component: login
    },
    {
      path: '/smart',
      name: '首页',
      component: smart
    }
  ]
})

