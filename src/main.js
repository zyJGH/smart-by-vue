// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import DataTables from 'vue-data-tables'
import mock from './mockServer';
import axios from 'axios';
import vueAxios from 'vue-axios';
import VueCookie from 'vue-cookie';

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(DataTables)
Vue.use(vueAxios,axios)
Vue.use(VueCookie);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

mock()