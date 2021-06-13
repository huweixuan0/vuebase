// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false



//引入mock.js
import mock from './common/mock/mock';
//挂载统一的api接口和request请求方法
import {request} from './common/http/http';
import * as apis from './common/api/api';
Vue.prototype.$apis = apis;
Vue.prototype.$https = request;

//引入vuex

import store from './common/vuex/vuex';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
