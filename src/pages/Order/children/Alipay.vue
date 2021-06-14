<template>
  <div class="alipay">
    <div class="container"></div>
    <div class="gotopay" ref="gotoAlipay" v-if="gotoAlipay" v-html="gotoAlipay"></div>
  </div>
</template>
<script type="text/ecmascript-6">
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["gotoAlipay"])
  },
  mounted() {

    this.$nextTick(() => {

      let script = document.createElement("script");

      script.innerHTML = `document.getElementById('bestPayForm').submit();`
      
      this.$refs.gotoAlipay.appendChild(script);
      
    });
  
  }
};
</script>

<style lang='scss'>
.alipay {
  .container {
    background-image: url("../../../assets/imgs/loading-svg/loading-bars.svg");
    background-position: center;
    height: 300px;
    background-repeat: no-repeat;
    background-size: 150px 150px;
  }
}
</style>
