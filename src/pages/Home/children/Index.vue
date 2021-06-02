<template>
  <div>
    <div class="container main">
      <div class="wrapper-info">
        <div class="menu-detail">
          <div class="menuLeft">
            <ul>
              <li>
                <a href="javascript:;">
                  手机 电话卡
                  <span class="fa fa-angle-right"></span>
                </a>
                <div class="categoryDetail">
                  <ul class="itemList" v-for="(urls,index) in imgUrlArrs" :key="index">
                    <li v-for="(url,index) in urls" :key="index">
                      <a href="javascrit:;">
                        <img v-if="url.url" :src="require(`../../../assets/imgs/${url.url}`)" />
                        <img
                          v-else
                          :src="require(`../../../assets/imgs/${imgUrlArrs[0][index].url}`)"
                        />
                        <span>{{url.name || imgUrlArrs[0][index].name}}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="javascript:;">
                  电视 盒子
                  <span class="fa fa-angle-right"></span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  笔记本 平板
                  <span class="fa fa-angle-right"></span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  家电 插线板
                  <span class="fa fa-angle-right"></span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  出行 穿戴
                  <span class="fa fa-angle-right"></span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  智能 路由器
                  <span class="fa fa-angle-right"></span>
                </a>
              </li>

              <li>
                <a href="javascript:;">
                  电源 配件
                  <span class="fa fa-angle-right"></span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  生活 箱包
                  <span class="fa fa-angle-right"></span>
                </a>
              </li>
            </ul>
          </div>
          <div class="slideShow">
            <swiper :options="swiperOptions">
              <swiper-slide v-for="(img,index) in slideshowImg" :key="index">
                <a :href="`product/${img.id}`">
                  <img :src="require(`../../../assets/imgs/${img.url}`)" alt />
                </a>
              </swiper-slide>

              <div class="swiper-pagination" slot="pagination"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </div>
        </div>
        <div class="banner">
          <a href="/product/30">
            <img src="../../../assets/imgs/banner-1.png" alt />
          </a>
        </div>
      </div>
    </div>
    <div class="newGoods">
      <div class="container">
        <div class="phone">
          <h3 class="title">手机</h3>
        </div>
        <div class="detail">
          <div class="left">
            <a href="/product/35">
              <img src="../../../assets/imgs/mix-alpha.jpg" alt />
            </a>
          </div>
          <div class="newPhones">
            <ul v-for="(phs,index) in phoneArrs" :key="index">
              <li v-for="(ph,index) in phs" :key="index">
                <span :class="{hide:(index+1)%2==0 ? true : false}">{{(index+1)%2==0 ? '爆款' : '新品'}}</span>

                <div class="show">
                  <img v-lazy="ph.mainImage" alt />
                </div>

                <div class="info">
                  <p>
                    <span>{{ph.name}}</span>
                    <span>{{ph.subtitle}}</span>
                  </p>
                  <a href="javascript:;" @click="addGoods(ph.id)">
                    {{ph.price}}元
                    <span class="fa fa-shopping-cart"></span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Modelbox
      sureText="查看购物车"
      :showModel="showMode"
      @closeModel="isShowModel"
      @doSomething="gotoCart"
    >
      <template>
        <div>商品添加成功!</div>
      </template>
    </Modelbox>
  </div>
</template>

<script type="text/ecmascript-6">
import chunk from "lodash/chunk";

import Modelbox from "../../../components/Modelbox.vue";

import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide,
    Modelbox
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        loop: true,
        effect: "cube",
        cubeEffect: {
          shadow: false
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        // autoplay:true,
        loop: true
      },
      imgUrlArrs: [
        [
          {
            key: 1,
            url: "item-box-1.png",
            name: "小米cc9"
          },
          {
            key: 2,
            url: "item-box-2.png",
            name: "小米青春版"
          },
          {
            key: 3,
            url: "item-box-3.jpg",
            name: "Redmi K20 Pro"
          },
          {
            key: 4,
            url: "item-box-4.jpg",
            name: " 移动4G专区 "
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      slideshowImg: [
        {
          id: "42",
          url: "slider/slide-1.jpg"
        },
        {
          id: "45",
          url: "slider/slide-2.jpg"
        },
        {
          id: "42",
          url: "slider/slide-3.jpg"
        },
        {
          id: "45",
          url: "slider/slide-3.jpg"
        },
        {
          id: "46",
          url: "slider/slide-5.jpg"
        }
      ],
      phoneArrs: [],
      showMode: false
    };
  },
  mounted() {
    this.getPhones();
  },
  methods: {
    getPhones() {
      this.axios
        .get("/products", {
          params: {
            categoryId: "100012",
            pageSize: 14
          }
        })
        .then(rea => {
          let arr = rea.list.slice(6, 14);

          this.phoneArrs = chunk(arr, 4);
        });
    },
    isShowModel(flay) {
      this.showMode = flay;
    },
    addGoods(id) {
      
      if (!this.$cookie.get("usernameId")) {
        this.$router.replace("/login");

        return;
      }

      this.axios.post("/carts", { productId: id, selected: true }).then(res => {
        this.$store.dispatch('getCartsNum')
        this.isShowModel(true);
      });
    },
    gotoCart() {

     this.$router.replace('/cart')


    }
  }
};
</script>
<style lang='scss'>
.main {
  .wrapper-info {
    height: 641px;
  }
  .menuLeft {
    position: absolute;
    left: 0;
    top: 0;
    width: 264px;
    height: 399px;
    padding: 26px 0;
    z-index: 5;
    background-color: rgba(85, 88, 90, 0.48);

    & > ul {
      & > li {
        height: 50px;
        & > a {
          line-height: 50px;
          color: #fff;
          font-size: 16px;
          padding: 0 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .fa {
            font-size: 20px;
          }
        }
        &:hover {
          background-color: #ff6700;
        }
      }

      & > li:first-child:hover .categoryDetail {
        display: block;
      }
    }

    .categoryDetail {
      width: 962px;
      height: 451px;
      position: absolute;
      background: #fff;
      left: 264px;
      top: 0;
      border: 1px solid #e5e5e5;
      display: none;
      overflow: hidden;
      .itemList {
        overflow: hidden;
        li {
          width: 25%;
          height: 75px;
          float: left;
          display: flex;
          justify-content: center;
          align-items: center;

          & > a {
            display: flex;
            align-items: center;
            line-height: 75px;
            justify-content: center;
            font-size: 16px;
            color: #333;
          }

          img {
            width: 42px;
            height: 35px;
            margin-right: 15px;
          }
        }
      }
    }
  }

  .banner {
    height: 130px;
  }
  //轮播图
  .slideShow {
    height: 451px;

    .swiper-pagination-bullets {
      bottom: 15px;
    }
    //

    .swiper-container {
      height: 451px;
    }
    .swiper-button-prev {
      left: 274px;
    }
  }
}

.newGoods {
  height: 743px;
  background-color: #f5f5f5;
  .container {
    .phone {
      .title {
        height: 50px;
        font-size: 22px;
        line-height: 50px;
      }
    }

    .detail {
      position: absolute;
      overflow: hidden;
      .left {
        width: 224px;
        height: 619px;
        float: left;
        a {
          width: 100%;
        }
      }

      .newPhones {
        width: 1002px;

        float: left;

        & > ul:last-child {
          position: absolute;
          bottom: 0;
          right: 0;
        }

        & > ul {
          width: 1002px;
          overflow: hidden;

          & > li {
            float: left;
            margin-left: (1002px-236 * 4)/4;
            display: flex;
            align-items: center;
            flex-direction: column;
            & > span:first-child {
              width: 67px;
              height: 24px;
              line-height: 24px;
              background-color: #7ecf68;
              color: #fff;
              text-align: center;
            }
            width: 236px;
            height: 302px;
            background-color: #fff;

            .info {
              & > p {
                text-align: center;
                display: flex;
                flex-direction: column;
                line-height: 20px;
                color: #999;
                & > span:first-child {
                  font-size: 14px;
                  color: #000;
                  font-weight: bold;
                }
              }

              a {
                margin-top: 10px;
                width: 236px;
                display: block;
                text-align: center;
                color: #ff6700;
                font-size: 14px;
                font-weight: bold;

                .fa {
                  font-size: 18px;
                  transform: translateY(2px);
                }
              }
            }
          }
        }

        .show {
          width: 236px;
          height: 195px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}

.hide {
  background-color: red !important;
}
</style>
