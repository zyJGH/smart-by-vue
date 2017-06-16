import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import smart from '@/pages/smart'
import first from '@/pages/first'
import housemng from '@/pages/houseMng'
import chargemng from '@/pages/chargeMng'
import chargesta from '@/pages/chargestatistics';
import carMng from '@/pages/carMng';
import emptyCar from '@/pages/emptyCar';

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
        },
        {
          path: 'chargemng',
          name: "入费账单",
          component: chargemng
        },
        {
          path: 'chargesta',
          name: "收费统计",
          component: chargesta
        },
        {
          path: 'carMng',
          name: "车位管理",
          component: carMng
        },
        {
          path: 'emptyCar',
          name: "空车位查询",
          component: emptyCar
        }
      ]
    }
  ]
})

