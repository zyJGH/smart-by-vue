import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import smart from '@/pages/smart'
import first from '@/pages/first'
import housemng from '@/pages/houseMng'

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
      component: smart,
      children: [
        {
          path: 'first',
          name: "",
          component: first,
        },
        {
          path: 'houseMng',
          name: "房产管理",
          component: housemng
        }
      ]
    }
  ]
})

