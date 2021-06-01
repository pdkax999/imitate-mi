<template>
  <div class="detail">
    <div class="container">
      <InfoBar :productInfo="Productinfo" :isShowBay="false" />
      <div class="goods_detail">
        <div class="slideshow">
          <swiper :options="swiperOptions">
            <swiper-slide v-for="(img,index) in slideList" :key="index">
              <img :src="require(`../../../assets/${img}`)" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>

        <div class="infoGoods">
          <div class="item1">
            <h3 class="title">{{Productinfo.name}}</h3>
            <p class="trait">
              相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红
              外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏
            </p>
            <div class="delivery">小米自营</div>
            <div class="price">
              <span class="new">{{Productinfo.price}}元</span>
              <span>1999元</span>
            </div>
          </div>
          <div class="address">
            <p>
              <span class="fa fa-location-arrow"></span>北京 北京市 朝阳区 安定门街道
            </p>
            <p>有现货</p>
          </div>
          <div class="detail">
            <div class="version">
              <h3>选择版本</h3>
              <div class="info" @click="selectVer">
                <div :class="{active:curText.indexOf('6GB+64GB')!==-1}">6GB+64GB 全网通</div>
                <div :class="{active:curText.indexOf('4GB+64GB')!==-1}">4GB+64GB 移动4G</div>
              </div>
            </div>
            <div class="color">
              <h3>选择颜色</h3>
              <div class="active">
                <span>深灰色</span>
              </div>
            </div>
          </div>
          <div class="curGoodsInfo">
            <div class="phone">
              <p>
                <span style="margin-right:10px">{{Productinfo.name}}</span>
                <span class="ver">{{curText}} 深灰色</span>
              </p>
              <span class="price">{{Productinfo.price}}元</span>
            </div>
            <div class="total">总计：{{Productinfo.price}}元</div>
          </div>
          <div class="gotoCart">
            <a href="javascript:;">加入购物车</a>
          </div>
        </div>
      </div>
    </div>
    <div class="explain">
      <div class="container">
        <h1>价格说明</h1>
        <div class="detail">
          <img src="../../../assets/imgs/detail/item-price.jpeg" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import InfoBar from "../../../components/InfoBar.vue";
import { swiper, swiperSlide, directive } from "vue-awesome-swiper";

import "swiper/dist/css/swiper.css";
export default {
  data() {
    return {
      slideList: [
        "imgs/detail/phone-1.jpg",
        "imgs/detail/phone-2.jpg",
        "imgs/detail/phone-3.jpg",
        "imgs/detail/phone-4.jpg"
      ],
      swiperOptions: {
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      curText: "6GB+64GB 全网通",
      Productinfo: {}
    };
  },
  props: ["id"],
  components: {
    InfoBar,
    swiper,
    swiperSlide
  },
  mounted() {
    this.getProductinfo();
  },
  methods: {
    selectVer(event) {
      if (event.target.nodeType === 1) {
        this.curText = event.target.innerHTML;

        console.log(event.target.innerHTML == this.curText);
      }
    },

    getProductinfo() {
      this.axios.get("/products/" + this.id).then(val => {
        this.Productinfo = val;
      });
    }
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

      .swiper-slide {
        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .infoGoods {
      width: 1226-642px;
      float: left;

      .item1 {
        padding-bottom: 25px;
        border-bottom: 1px solid #e5e5e5;
        & > .title {
          font-size: 28px;
          padding-top: 30px;
          padding-bottom: 16px;
          height: 26px;
        }

        p.trait {
          font-size: 14px;
          height: 36px;
        }

        .delivery {
          font-size: 16px;
          color: #ff6700;
          margin-top: 26px;
          margin-bottom: 14px;
          height: 15px;
        }

        .price {
          font-size: 20px;
          color: #ff6700;
          height: 29px;

          span:last-child {
            font-size: 16px;
            color: #999;
            margin-left: 10px;
            text-decoration: line-through;
          }
        }
      }

      .address {
        position: relative;
        margin-top: 28px;
        height: 108px;
        background-color: #fafafa;
        border: 1px solid #e5e5e5;
        box-sizing: border-box;
        padding-top: 31px;
        padding-left: 64px;
        font-size: 14px;
        line-height: 14px;
        position: relative;

        .fa {
          position: absolute;
          font-size: 20px;
          left: 40px;
          transform: translateY(-4px);
        }

        & > p:last-child {
          margin-top: 15px;
          color: #ff6700;
        }
      }

      .detail {
        margin-top: 30px;

        .version {
          & > h3 {
            font-size: 18px;
            margin-bottom: 20px;
          }

          .info {
            display: flex;
            justify-content: space-between;
            div {
              width: 45%;
              height: 48px;
              line-height: 48px;
              border: #e5e5e5 1px solid;
              font-size: 16px;
              color: #333;
              box-sizing: border-box;
              text-align: center;
              cursor: pointer;
              &.active {
                border-color: #ff6700;
                color: #ff6700;
              }
            }
          }
        }
        .color {
          & > h3 {
            font-size: 18px;
            margin-bottom: 20px;
          }
          margin-top: 30px;

          div {
            width: 45%;
            height: 48px;
            line-height: 48px;
            border: #e5e5e5 1px solid;
            font-size: 16px;
            color: #333;
            box-sizing: border-box;
            text-align: center;
            cursor: pointer;
            &.active {
              border-color: #ff6700;
              color: #ff6700;
            }
          }
        }
      }

      .curGoodsInfo {
        height: 108px;
        background: #fafafa;
        padding: 24px 33px 29px 30px;
        font-size: 14px;
        margin-top: 50px;
        margin-bottom: 30px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;

        .phone {
          color: #000;
          display: flex;
          justify-content: space-between;
        }

        .total {
          font-size: 24px;
          color: #f60;
          margin-top: 18px;
        }
      }
      .gotoCart {
        width: 300px;
        height: 54px;
        background-color: #ff6700;
        text-align: center;
        a {
          color: white;
          width: 300px;
          height: 54px;
          line-height: 54px;
          font-size: 16px;
        }
      }
    }
  }

  .explain {
    background-color: #f3f3f3;
    & > .container {
      height: 340px;
      h1 {
        font-size: 24px;
        color: #333;
        padding-top: 38px;
        margin-bottom: 30px;
      }
    }
  }
}
</style>
