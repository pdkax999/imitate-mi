import Vue from 'vue'

import App from './App.vue'

import router from "./router/router.js";

import axios from "axios";

import VueAxios from "vue-axios";

import {Message} from 'element-ui'
import VueLazyload from 'vue-lazyload';


Vue.use(VueLazyload, {
  loading: require('../src/assets/imgs/loading-svg/loading-bars.svg')
})

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

Vue.prototype.$message = Message

axios.defaults.baseURL = '/api';

axios.defaults.timeout = 5000


axios.interceptors.response.use(function(response){
  let res = response.data;

  if(res.status == 0){
    
      return res.data;

  }else if(res.status == 10){
    
      if(router.currentRoute !== '/login'){

        router.replace('/login');

      }
    // window.location.href = '/#/login';
    
    return Promise.reject(res);

  }else{
     Message.warning(res.msg);

    return Promise.reject(res);

  }
},(error)=>{
     
  Message.error(error.message);
  return  new Promise(()=>{})
});



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
