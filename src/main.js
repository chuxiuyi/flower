// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import store from '@/store/index.js'

// 引入接口文件
import api from '@/apis/index.js'
Vue.prototype.api = api;

// 引入axios
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

new Vue({
  el: '#app',
  router,
	store,
  components: { App },
  template: '<App/>'
})
