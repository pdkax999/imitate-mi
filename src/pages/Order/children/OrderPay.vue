<template>
  <div class="OrderPay">
    <div class="container orderTop" v-if="orderDetail.shippingVo">
      <div class="orderInfo">
        <div class="icon">
          <span class="fa fa-check-circle"></span>
        </div>

        <div class="OrderDetail">
          <h2>订单提交成功！去付款咯～</h2>
          <p class="info">
            请在
            <span class="line">30</span>
            分内完成支付, 超时后将取消订单
            <br />
            <span class="address">
              收货信息：
              <span>{{orderDetail.shippingVo.receiverName}}</span>
              <span>{{orderDetail.shippingVo.receiverMobile}}</span>
              <span>{{orderDetail.shippingVo.receiverProvince}}</span>
              <span>{{orderDetail.shippingVo.receiverCity}}</span>
              <span>{{orderDetail.shippingVo.receiverDistrict}}</span>
              <span>{{orderDetail.shippingVo.receiverAddress}}</span>
              <span>{{orderDetail.shippingVo.receiverZip}}</span>
            </span>
          </p>
        </div>
        <div class="orderPrice">
          <p>
            应付总额:
            <span>{{orderDetail.payment}}</span>元
          </p>

          <p>
            订单详情
            <span
              class="fa fa-arrow-circle-down"
              :class="{active:showDetail}"
              @click="showDetail=!showDetail"
            ></span>
          </p>
        </div>
      </div>
      <div class="productDetail" :class="{active:showDetail}">
        <div class="content">
          <ul>
            <li>
              <span>订单号:</span>
              <span>{{orderDetail.orderNo}}</span>
            </li>
            <li>
              <span>收货信息:</span>
              <span class="address">
                <span>{{orderDetail.shippingVo.receiverName}}</span>
                <span>{{orderDetail.shippingVo.receiverMobile}}</span>
                <span>{{orderDetail.shippingVo.receiverProvince}}</span>
                <span>{{orderDetail.shippingVo.receiverCity}}</span>
                <span>{{orderDetail.shippingVo.receiverDistrict}}</span>
                <span>{{orderDetail.shippingVo.receiverAddress}}</span>
                <span>{{orderDetail.shippingVo.receiverZip}}</span>
              </span>
            </li>
            <li>
              <span>商品名称:</span>
              <ul>
                <li v-for="(order,index) in orderDetail.orderItemVoList" :key="index">
                  <img :src="order.productImage" alt />
                  <span>{{order.productName}}</span>
                </li>
              </ul>
            </li>
            <li>
              <span>发票信息:</span>

              <span>
                <span>电子发票</span>
                <span>个人</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="wayPay container">
      <h1>选择以下支付方式付款</h1>
      <div class="ways">
        <p>支持平台</p>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  mounted() {
    // console.log(this.orderNo);
    this.getOrderDetail();
  },
  methods: {
    getOrderDetail() {
      this.axios.get("/orders/" + this.orderNo).then(res => {
        this.orderDetail = res;
      });
    }
  },
  props: ["orderNo"],
  data() {
    return {
      showDetail: false,
      orderDetail: {}
    };
  }
};
</script>

<style lang='scss'>
.OrderPay {
  background-color: #f5f5f5;
  padding: 40px 0;
  .orderTop {
    background-color: #fff;

    & > .orderInfo {
      box-sizing: border-box;
      padding: 62px 50px;
      background-color: #fff;
      font-size: 14px;
      margin-bottom: 10px;
      overflow: hidden;
      .icon {
        float: left;
        width: 90px;
        height: 90px;
        border-radius: 50%;
        margin-right: 40px;
        span {
          font-size: 100px;
          text-align: center;
          color: #ff6700;
        }
      }
      .OrderDetail {
        width: 357px;
        height: 87px;
        float: left;
        margin-right: 248px;

        h2 {
          margin-bottom: 30px;
        }

        .info {
          color: rgb(102, 102, 102);
          font-size: 14px;
          .line {
            color: #ff6700;
          }
          .address {
            span {
              margin: 0px 1px;
            }
          }
        }
      }

      .orderPrice {
        float: left;
        font-size: 14px;
        height: 90px;

        p {
          height: 50%;
          line-height: 45px;
        }

        p:first-child {
          span:first-child {
            font-size: 28px;
            color: #ff6700;
          }
        }

        p:last-child {
          span {
            font-size: 20px;
            transition: all 0.5s;
            cursor: pointer;
            &.active {
              transform: rotateZ(180deg);
            }
          }
        }
      }
    }

    .productDetail {
      border-top: 1px solid #d7d7d7;
      padding-top: 47px;
      padding-left: 130px;
      padding-bottom: 67px;
      font-size: 14px;
      display: none;

      &.active {
        display: block;
      }

      .content {
        & > ul {
          li {
            margin-bottom: 19px;
            display: flex;

            span:first-child {
              width: 100px;
              height: 19px;
            }

            .address {
              span {
                margin: 0px 1px;
              }
            }

            img {
              width: 30px;
              height: 30px;
              vertical-align: top;

              & + {
                line-height: 30px;
              }
            }

            ul > li {
              margin: 0;
              height: 30px;
              line-height: 30px;
            }
          }
        }
      }
    }
  }

  .wayPay {
    box-sizing: border-box;
    margin-top: 30px;
    padding: 26px 50px 72px;
    background-color: #fff;
    color: #333;

    h1 {
      font-size: 20px;
      font-weight: 200;
      color: #333;
      padding-bottom: 24px;
      border-bottom: 1px solid #d7d7d7;
      margin-bottom: 26px;
    }

    .ways {
      p {
        font-size: 18px;
        color: #333;
        margin-bottom: 19px;
      }

      ul > li {
        display: inline-block;
        width: 188px;
        height: 64px;
        border: 1px solid #d7d7d7;
        cursor: pointer;

        &:first-child {
          background: url("../../../assets/imgs/pay/icon-ali.png") no-repeat 50%;
          background-size: 103px 38px;
          margin-top: 19px;
          margin-right: 20px;
        }
        &:last-child {
          background: url("../../../assets/imgs/pay/icon-wechat.png") no-repeat
            50%;
          background-size: 103px 38px;
          margin-top: 19px;
        }
      }
    }
  }
}
</style>
