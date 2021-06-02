import {RECEIVEINFO,REMOVEINFO, REMOVECARTSNUM} from "../store/mutationTypes.js";

export default {
 
  [RECEIVEINFO](state,user){
         
    state.userInfo = user
     
  },
  [REMOVEINFO](state){

    state.userInfo = {}

  },
  [REMOVECARTSNUM](state,val){

   state.cartsNum=val

  }
}