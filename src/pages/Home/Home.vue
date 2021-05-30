<template>
  <div>
    
    <Navbar/>  
    <router-view></router-view>
    <NavFooter :showBar="showBar"/>
  </div>
</template>

<script type="text/ecmascript-6">
import Navbar from "../../components/Navbar.vue";
import NavFooter from "../../components/NavFooter";
  export default {
    name:'nav-home',
    components:{
      NavFooter,
      Navbar
    },
    data(){

      return {
         showBar:true

      }
  

    },
    methods:{

    isShowBar(flay){

      this.showBar = flay


    }
    }
  }
</script>

<style >


 
</style>
