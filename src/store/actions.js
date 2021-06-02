import {
  RECEIVEINFO,
  REMOVECARTSNUM
} from "../store/mutationTypes.js";

import axios from "axios";

export default {

  getUserInfo({
    commit
  }, userinfo) {

    commit(RECEIVEINFO, userinfo)

  },
   getCartsNum({
    commit
  }) {

    axios('/carts/products/sum').then((val) => {

      commit(REMOVECARTSNUM,val)

    })

  }
}