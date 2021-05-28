import {RECEIVEINFO} from "../store/mutationTypes.js";

export default {

 getUserInfo({commit},userinfo){
    
   commit(RECEIVEINFO,userinfo)
  
  }

}