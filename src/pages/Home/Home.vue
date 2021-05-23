<template>
  <div>

    <div class="box">
      <div class="box1"></div>
    </div>

    <Navbar/>  
    <router-view></router-view>
    <NavFooter/>
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
    mounted(){
      

      
    }
  }
</script>

<style  lang="less">


 
</style>
