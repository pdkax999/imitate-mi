import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    userInfo:{},
    cartsNum:0
    
  },
  actions,
  mutations

})