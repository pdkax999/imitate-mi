
<template>
  <div class="order">
   <Navply title="订单确认" tips="请认真填写收货地址"/>
   <Confirm/>
  </div>
</template>

<script type="text/ecmascript-6">
//登录跳转未登录 跳转登录
import Navply from "../../components/Navply.vue";
import Confirm from "./children/Confirm.vue";

  
  export default {
  components:{
  Navply,
  Confirm

  } 
  }
</script>

<style scoped>

 
</style>
