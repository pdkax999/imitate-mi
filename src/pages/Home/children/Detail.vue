<template>
  <div class="detail">
    <div class="container">
      <InfoBar :productInfo="{name:'小米'}" />
      <div class="goods_detail">
        <div class="slideshow"></div>
        <div class="infoGoods">
          <h3>小米9</h3>
          <p class="trait">
            相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红
            外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏
          </p>
          <div class="delivery">小米自营</div>
          <div class="price">
            <span class="new">999元</span>
            <span>1999元</span>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import InfoBar from "../../../components/InfoBar.vue";
export default {
  components: {
    InfoBar
  }
};
</script>

<style lang='scss'>
.detail {
  & > .container {
    height: 870px;

    .slideshow {
      width: 642px;
      height: 617px;
      float: left;
      background-color: #bfa;
    }

    .infoGoods {
      width: 1226-642px;
      float: left;
    }
  }
}
</style>
