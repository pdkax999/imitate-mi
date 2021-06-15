import Vue from 'vue'

import App from './App.vue'

import router from "./router/router.js";

import axios from "axios";

import VueCookie from "vue-cookie";

import store from "./store/store.js";

import VueAxios from "vue-axios";

import {
  Message,Pagination
} from 'element-ui'

import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
  loading: require('../src/assets/imgs/loading-svg/loading-bars.svg')
})

Vue.use(VueAxios, axios)

Vue.use(Pagination);

Vue.use(VueCookie)

Vue.config.productionTip = false

Vue.prototype.$message = Message

axios.defaults.baseURL = '/api';

axios.defaults.timeout = 5000

axios.interceptors.response.use(function (response) {
  
  let res = response.data;

  if (res.status == 0) {

    return res.data;

  } else if (res.status == 10) {

    Message({
      message: '当前未登录',
      type: 'warning'
    });

    if (router.currentRoute.path !== '/login') {

      router.replace('/login');

    }
   
    return new Promise(()=>{})

  } else {

    Message.warning(res.msg);

    return new Promise(() => {})

  }
}, (error) => {
 
  
  Message.error(error.message);
 
   return new Promise(() => {})
});



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')