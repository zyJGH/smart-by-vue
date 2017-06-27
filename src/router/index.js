import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import smart from '@/pages/smart'
import first from '@/pages/first'
import houseMng from '@/pages/houseMng'
import chargeMng from '@/pages/chargeMng'
import chargesta from '@/pages/chargestatistics';
import carMng from '@/pages/carMng';
import emptyCar from '@/pages/emptyCar';
import leaseMng from '@/pages/leaseMng';
import leaseContract from '@/pages/leaseContract';
import householdMng from '@/pages/householdMng';
import serviceMng from '@/pages/serviceMng';
import securityMng from '@/pages/securityMng';
import layout from '@/pages/layout';
import closestool from '@/pages/closestool';
import lamp from '@/pages/lamp';
import waterway from '@/pages/waterway';
import green from '@/pages/green';
import road from '@/pages/road';
import entranceGuard from '@/pages/entranceGuard';
import lift from '@/pages/lift';
import fire from '@/pages/fire';
import fireState from '@/pages/fireState';
import healthMng from '@/pages/healthMng';
import corridor from '@/pages/corridor';
import park from '@/pages/park';
import settings from '@/pages/settings';
import householdStatistics from '@/pages/householdStatistics';
import advert from '@/pages/advert';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', name: '登录', component: login
    },
    {
      path: '/smart',
      name: '首页',
      component: smart,
      redirect: '/smart/first',
      children: [
        {
          path: 'first', 
          name: "物业管理", 
          component: layout, 
          redirect: '/smart/first/index',
          children: [
            { path: 'index', name: '物业信息', component: first },
            { path: 'houseMng', name: "房产管理", component: houseMng },
            {
              path: 'leaseMng', 
              name: "租赁管理", 
              component: layout, 
              redirect: '/smart/first/lease',
              children: [
                { path: 'lease', name: "租赁信息", component: leaseMng },
                { path: 'leaseContract', name: "查看租赁合同", component: leaseContract },
              ]
            },
            { path: 'householdMng', name: "住户管理", component: householdMng},
            {
              path: 'chargeMng', 
              name: '收费管理', 
              component: layout, 
              redirect: '/smart/first/charge',
              children: [
                { path: 'charge', name: "入费账单", component: chargeMng },
                { path: 'chargesta', name: "收费统计", component: chargesta },                
              ]
            },            
            {
              path: 'carMng', 
              name: "车位管理", 
              component: layout, 
              redirect: '/smart/first/cars',
              children: [
                { path: 'cars', name: "车位信息", component: carMng },
                { path: 'emptyCar', name: "空车位查询", component: emptyCar }
              ]
            }
          ]
        },
        {
          path: 'serviceMng', 
          name: "维修管理", 
          component: layout,
          redirect: '/smart/serviceMng/service',
          children: [
            { path: 'service', name: "维修信息", component: serviceMng },
            { path: 'closestool', name: "马桶维修", component: closestool },
            { path: 'lamp', name: "灯管维修", component: lamp },
            { path: 'waterway', name: "灯管维修", component: waterway },
            { path: 'green', name: "灯管维修", component: green },
            { path: 'road', name: "灯管维修", component: road },
          ]
        },
        {
          path: 'securityMng', 
          name: "安防管理", 
          component: layout,
          redirect: '/smart/securityMng/security',
          children: [
            {path: 'security', name: "安防信息", component: securityMng},
            {path: 'entranceGuard', name: "进出门禁", component: entranceGuard},
            {path: 'lift', name: "电梯管理", component: lift},
            {
              path: 'fire', 
              name: "灭火装置", 
              component: layout,
              redirect: '/smart/securityMng/security/huo/fire',
              children: [
                { path: 'huo', name: '灭火装置信息', component: fire },
                { path: 'fireState', name: '灭火装置状态', component: fireState }                
              ]
            }
          ],
          
        },
        {
          path: 'healthMng',
          name: '卫生管理',
          component: layout,
          redirect: '/smart/healthMng/health',
          children: [
            { path: 'health', name:'卫生信息', component: healthMng },
            { path: 'corridor', name:'卫生管理', component: corridor },
            { path: 'park', name:'卫生管理', component: park },
          ]
        },
        {
          path: 'settings',
          name: '系统设置',
          component: layout,
          redirect: '/smart/settings/setting',
          children: [
            { path: 'setting', name: '系统设置', component: settings },
            { path: 'householdStatistics', name: '住户统计', component: householdStatistics },
            { path: 'advert', name: '广告管理', component: advert }
          ]
        }

      ]
    }
  ]
})

