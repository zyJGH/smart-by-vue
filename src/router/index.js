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
import leaseMng from '@/pages/leaseMng';
import leaseContract from '@/pages/leaseContract';
import householdMng from '@/pages/householdMng';
import serviceMng from '@/pages/serviceMng';
import security from '@/pages/security';

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
          name: "物业管理",
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
        },
        {
          path: 'leaseMng',
          name: "租赁管理",
          component: leaseMng,
          children : [
            {
              path: 'leaseContract',
              name: "查看租赁合同",
              component: leaseContract
            },
          ]
        },        
        {
          path: 'householdMng',
          name: "住户管理",
          component: householdMng
        },
        {
          path: 'serviceMng',
          name: "维修管理",
          component: serviceMng
        },
        {
          path: 'security',
          name: "安防管理",
          component: security
        }
      ]
    }
  ]
})

