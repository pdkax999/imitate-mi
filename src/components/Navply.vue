<template>
  <div class="navply">
    <div class="container">
      <h1 class="logo">
        <a href="/">
          <img src="../assets/imgs/logo-mi2.png" alt />
        </a>
      </h1>
      <div class="title">
        <slot>
          <h2>
            {{title}}
            <span class="tips">{{tips}}</span>
          </h2>
        </slot>
      </div>
      <div class="user">
        <span>{{userInfo.username}}</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["userInfo"])
  },
  props: {
    title: {
      type: String,
      default: "我的购物车"
    },
    tips: {
      type: String,
      default: "温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算"
    }
  }
};
</script>

<style lang='scss'>
.navply {
  display: flex;
  align-items: center;
  height: 117px;
  border-bottom: 2px solid #f60;
  & > .container {
    overflow: hidden;
    .logo {
      width: 55px;
      height: 55px;
      float: left;
      margin-right: 55px;
      line-height: 117px;
      img {
        vertical-align: top;
      }
    }

    .title {
      float: left;
      display: flex;
      line-height: 55px;
      align-items: center;
      h2 {
        font-size: 28px;
        color: #333;

        .tips {
          font-size: 14px;
          margin-left: 17px;
          color: #999;
          font-weight: 200;
        }
      }
    }

    .user {
      float: right;
      line-height: 55px;
      color: #666;
      font-size: 16px;
    }
  }
}
</style>
