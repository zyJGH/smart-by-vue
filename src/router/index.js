import Vue from 'vue'
import Router from 'vue-router'
import regist from '@/components/regist'
// import smart from '@/components/smart';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'regist',
      component: regist
    // },
    // {
    //   path: '/',
    //   name: '首页',
    //   component: smart,
    }
  ]
})
