import Vue from 'vue'
import Router from 'vue-router'
import regist from '@/components/regist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'regist',
      component: regist
    }
  ]
})
