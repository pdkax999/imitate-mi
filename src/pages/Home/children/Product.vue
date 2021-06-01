<template>
  <div class="product">
    <div class="content">
      <div class="goosShow">
        <InfoBar :productInfo="Productinfo"></InfoBar>
        <div class="goodsInfo">
          <h1>{{Productinfo.name}}</h1>
          <p>{{Productinfo.subtitle}}</p>
          <ul class="trait">
            <li>
              <a href="javascript:;">全球双频GP</a>
            </li>
            <li class="line">|</li>
            <li>
              <a href="javascript:;">骁龙845</a>
            </li>
            <li class="line">|</li>
            <li>
              <a href="javascript:;">AI变焦双摄</a>
            </li>
            <li class="line">|</li>
            <li>
              <a href="javascript:;">红外人脸识别</a>
            </li>
            <li class="line">|</li>
          </ul>
          <h3 class="price" v-if="Productinfo.price">{{"￥"+Productinfo.price}}</h3>
        </div>
      </div>
      <div class="goods-bg1"></div>
      <div class="goods-bg2"></div>
    </div>
    <div class="slideshow">
      <div class="container">
        <swiper :options="swiperOptions">
          <swiper-slide v-for="(img,index) in slideList" :key="index">
            <img :src="require(`../../../assets/imgs${img}`)" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>

      <div class="tips">
        <span>小米8 AI变焦双摄拍摄</span>
      </div>
    </div>
    <div class="detail-video">
      <div class="container">
        <div class="title">
          <h1>
            60帧超慢动作摄影
            <br />慢慢回味每一瞬间的精彩
          </h1>
          <div class="info">
            后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！
            <br />更能AI 精准分析视频内容，15个场景智能匹配背景音效。
          </div>
        </div>
        <div class="show-video" @click="showVideo=true"></div>
      </div>
    </div>
    <transition name="videoWrp">

       <div class="goodsVideo" v-show="showVideo">
      <div class="video" >
        <span class="fa fa-close" @click="showVideo=false"></span>
        <video src="../../../assets/imgs/product/video.mp4" muted autoplay controls></video>
      </div>
      <div class="mask"></div>
    </div>
    </transition>
  </div>
</template>
<script type="text/ecmascript-6">
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide, directive } from "vue-awesome-swiper";

import "swiper/dist/css/swiper.css";

import InfoBar from "../../../components/InfoBar.vue";

export default {
  components: {
    swiper,
    swiperSlide,
    InfoBar
  },
  props:['id'],
  data() {
    return {
      slideList: [
        "/product/gallery-2.png",
        "/product/gallery-3.png",
        "/product/gallery-4.png",
        "/product/gallery-5.jpg",
        "/product/gallery-6.jpg"
      ],
      swiperOptions: {
        autoplay: true,
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      showVideo: false,
      Productinfo:{}
    };
  },
  mounted() {
   
    this.getProductinfo()
    this.$parent.isShowBar(false);
  },
  directives: {
    swiper: directive
  },
  methods:{

    getProductinfo(){

      this.axios.get('/products/'+this.id).then((val)=>{
       this.Productinfo = val  
        
      })
    }

  }
};
</script>

<style lang='scss'>
.product {
  .content {
    .goosShow {
      position: relative;
      text-align: center;
      height: 718px;
      background: url("../../../assets/imgs/product/product-bg-1.png") 50%
        center no-repeat;

      .goodsInfo {
        & > h1 {
          font-size: 80px;
          padding-top: 55px;
          letter-spacing: 5px;

          & + p {
            font-size: 24px;
            letter-spacing: 5px;
            font-weight: bold;
          }
        }

        .trait {
          display: flex;
          padding: 20px 0;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          li {
            a {
              font-size: 16px;
              color: #333;
            }
          }

          .line {
            margin: 0 17px;
          }
        }
        .price {
          font-size: 38px;
        }
      }
    }

    .goods-bg1 {
      background: url("../../../assets/imgs/product/product-bg-2.png") 50%
        center / 1226px 397px no-repeat;
      height: 480px;
    }
    .goods-bg2 {
      background: url("../../../assets/imgs/product/product-bg-3.png") 50%
        center / cover no-repeat;
      height: 638px;
    }
  }
  .slideshow {
    height: 250px;
    padding: 36px 0 52px 0;

    .tips {
      font-size: 18px;
      color: #333;
      text-align: center;
    }
  }

  .detail-video {
    height: 1074px;
    margin-bottom: 76px;
    background-color: #000;
    color: #fff;
    text-align: center;

    h1 {
      font-size: 60px;
      padding-top: 82px;
      margin-bottom: 47px;
      & + div.info {
        font-size: 24px;
        margin-bottom: 58px;
      }
    }

    .show-video {
      background: url("../../../assets/imgs/product/gallery-1.png") no-repeat
        50%;
      background-size: cover;
      width: 1226px;
      height: 540px;
      margin: 0 auto 120px;
      cursor: pointer;
    }
  }

  .swiper-slide {
    width: 388.667px !important;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .goodsVideo {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 111999999;

    .video {
      width: 1000px;
      height: 536px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
       z-index: 1119999997;
      

      .fa {
      position: absolute;
      font-size: 40px;
      right: 40px;
      top: 10px;
      color: #919191;
       z-index: 111999999457;
      
      }

      video {
       width: 1000px;
       height: 536px;
        outline: none;
      }
    }

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

  .videoWrp-enter-active,
.videoWrp-leave-active {
  transition: all 0.5s;
}

.videoWrp-enter,
.videoWrp-leave-to {
  top: -100%;
  opacity: 0;
}



}
</style>
