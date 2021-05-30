<template>
  <transition name="model">
    <div class="model" v-if="showModel">
      <div class="modelBox">
        <div class="hint">
          <div>
            <span>{{title}}</span>
            <span class="fa fa-close" @click="closeModel"></span>
          </div>
        </div>
        <div class="wrapper-content">
          <slot></slot>
        </div>
        <div class="model-footer">
          <a href="javascript:;" class="btn">{{sureText}}</a>
        </div>
      </div>
      <div class="mask"></div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    showModel: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "提示"
    },
    sureText: {
      type: String,
      default: "确定"
    }
  },
  methods: {
    closeModel() {
      this.$emit("closeModel", false);
    },
    doSomething() {
      this.$emit("something");
    }
  }
};
</script>

<style lang='scss'>
.model {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 111;

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    opacity: 0.5;
  }
}

.modelBox {
  position: absolute;
  z-index: 999;
  width: 610px;
  top: 40%;
  left: 50%;
  background-color: #f5f5f5;
  transform: translate(-50%, -50%);
  .hint {
    div {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        font-size: 16px;
        transition: all 0.5s;
      }

      & > span:last-child:hover {
        font-size: 24px;
      }
    }
    height: 60px;
    padding: 0px 25px;
  }

  .wrapper-content {
    padding: 42px 40px 54px;
    background-color: #fff;
    font-size: 16px;
  }

  .model-footer {
    height: 82px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    .btn {
      width: 110px;
      height: 30px;
      color: #fff;
      line-height: 30px;
      background-color: #ff6700;
    }
  }
}

.model-enter-active,
.model-leave-active {
  transition: all 0.5s;
}

.model-enter,
.model-leave-to {
  top: -100%;
}
</style>
