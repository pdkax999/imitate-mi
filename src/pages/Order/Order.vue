
<template>
  <div class="order">
    <Navply :title="title" :tips="tips" />
    <router-view></router-view>
    <NavFooter />
  </div>
</template>

<script type="text/ecmascript-6">
//登录跳转未登录 跳转登录
import Navply from "../../components/Navply.vue";
import Confirm from "./children/Confirm.vue";
import NavFooter from "../../components/NavFooter.vue";
export default {
  components: {
    Navply,
    Confirm,
    NavFooter
  },
  mounted(){
      
    this.updateTitle()
  },
  watch: {
    $route(route) {
      this.updateTitle();
    }
  },
  methods: {
    updateTitle() {
      if (this.$route.path === "/order/confirm") {
        this.title = "订单确认";
        this.tips = "请认真填写收货地址";
      } else if (this.$route.path === "/order/pay") {
       
        this.title = "订单支付";
        this.tips = "请请谨防钓鱼链接或诈骗电话，了解更多";
      }
    }
  },
  data() {
    return {
      title: "订单确认",
      tips: "请认真填写收货地址"
    };
  }
};
</script>

<style scoped>
</style>
