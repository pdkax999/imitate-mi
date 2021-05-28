import {RECEIVEINFO,REMOVEINFO} from "../store/mutationTypes.js";

export default {
 
  [RECEIVEINFO](state,user){
         
    state.userInfo = user
     
  },
  [REMOVEINFO](state){

    state.userInfo = {}

  }
}