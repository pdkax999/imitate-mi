<template>
  <transition name="show">
    <div class="wechatPyay" v-if="show">
      <div class="wellPay">
        <div class="scanLeft"></div>
        <div class="qrcodeWrapper">
          <div class="head">
            <span>微信支付</span>
            <span class="fa fa-close" @click="closeModel"></span>
          </div>
          <div class="content">
            <div class="code">
              <img v-lazy="url" alt />
            </div>
            <div class="tips">
              请使用微信扫一扫
              <br />二维码完成支付
            </div>
          </div>
        </div>
      </div>
      <div class="mask"></div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import QRCode from "qrcode";
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModel() {
      this.$emit("closeModel", false);
    },
    getQrcode(codeInfo) {
      QRCode.toDataURL(codeInfo)
        .then(url => {
          this.url = url;
        })
        .catch(err => {
          this.$message({
            message: "图片加载失败",
            type: "error",
            duration: 2000
          });
        });
    }
  },
  data() {
    return {
      url: ""
    };
  }
};
</script>

<style lang='scss'>
.wechatPyay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;

  .wellPay {
    width: 670px;
    height: 485px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    z-index: 10000;
    display: flex;
    .scanLeft {
      width: 296px;
      height: 100%;
      background: url("../assets/imgs/pay/icon-scan.png") no-repeat;
      background-size: contain;
    }

    .qrcodeWrapper {
      width: 370px;
      height: 440px;
      align-self: center;
      background-color: #fff;
      .head {
        height: 60px;
        line-height: 60px;
        color: #333;
        font-size: 20px;
        padding: 0 18px;
        background-color: #f5f5f5;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .content {
        img {
          width: 237px;
          height: 240px;
        }

        .code {
          text-align: center;
          padding: 44px 0 26px;
        }
        .tips {
          text-align: center;
          font-size: 14px;
          color: #333;
        }
      }
    }
  }
  .mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000;
    opacity: 0.5;
  }
}

.show-enter-active
{
  transition: all 0.5s;
}

.show-enter,
.show-leave-to {
  top: -100%;
}
</style>
