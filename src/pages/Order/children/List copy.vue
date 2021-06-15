<template>
  <div id="OrderList">
    <div class="container" v-if="orderList.length>0">
      <ol class="goodList">
        <li class="order" v-for="(order,index) in orderList" :key="index" v-if="order.shippingVo">
          <div class="headTitle">
            <ul>
              <li>{{order.createTime}}</li>
              <li class="line">|</li>
              <li>{{order.shippingVo.receiverName}}</li>
              <li class="line">|</li>
              <li>
                订单号：
                <span>{{order.orderNo}}</span>
              </li>
              <li class="line">|</li>
              <li>{{order.paymentTypeDesc}}</li>
            </ul>
            <div class="goodPrice">
              应付金额：
              <span class="price">{{order.payment}}</span>元
            </div>
          </div>
          <div id="goodinfo">
            <div class="name"  v-for="(goods,index) in order.orderItemVoList" :key="index">
              <img v-lazy="goods.productImage" alt :key="order.orderNo"/>
              <p>
                <span>{{goods.productName}}</span>
                <br />
                <span>{{goods.currentUnitPrice}}X{{goods.quantity}}元</span>
              </p>
              <div class="statusPay" v-if="index === 0">{{order.statusDesc}}</div>
            </div>
          </div>
        </li>
      </ol>
      <div id="pag">
        <div class="left">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            @current-change="handleCurrentChange"
          ></el-pagination>
        </div>
      </div>
    </div>
    <div class="loading" v-else></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
    getOrderList() {
      const { pageSize, pageNum } = this;

      this.axios("/orders", {
        params: {
          pageSize,
          pageNum
        }
      }).then(res => {
        this.orderList = res.list;
        this.total = res.total;
      });
    },
    showGoods(type) {   //多余的
      let num = this.pageNum;
      if (type == 1) {
        //1下一页 ,2上一页
        this.pageNum = ++num;
        this.getOrderList();
      } else {
        this.pageNum = --num;
        this.getOrderList();
      }
    },
    handleCurrentChange(num) {
      this.pageNum = num;
      this.getOrderList();
    }
  },
  mounted() {
    this.getOrderList();
  },
  data() {
    return {
      total: 0,
      orderList: [],
      pageNum: 1,
      pageSize: 10
    };
  }
};
</script>

<style lang='scss'>
#OrderList {
  background-color: #f5f5f5;
  padding: 30px 0 110px 0;
  .container {
    .goodList {
      & > .order {
        // height: 223px;
        border: 1px solid #d7d7d7;
        background-color: #fff;
        margin-bottom: 31px;
        overflow: hidden;

        .headTitle {
          height: 74px;
          line-height: 74px;
          padding: 0 43px;
          background-color: #fffaf7;
          font-size: 16px;
          color: #666;
          & > ul {
            float: left;
            overflow: hidden;

            li {
              float: left;
            }
            .line {
              margin: 0 9px;
              transform: translateY(-1px);
            }
          }
          .goodPrice {
            float: right;

            .price {
              font-size: 26px;
              color: #333;
            }
          }
        }

        #goodinfo {
          width: 100%;
          box-sizing: border-box;
          display: flex;
          padding: 0 43px;
          flex-direction: column;
          img {
            width: 112px;
            height: 112px;
          }
          .name {
            position: relative;
            width: 100%;
            display: flex;
            align-items: center;
            p {
              width: 160px;
              font-size: 20px;
              color: #333;
            }
          }
          .statusPay {
            height: 145px;
            line-height: 145px;
            font-size: 20px;
            color: #f60;
            position: absolute;
            right: 0;
          }
        }
      }
    }
    #pag {
      .left {
        float: right;
      }
    }
  }

  .loading {
    position: relative;
    width: 1226px;
    margin-right: auto;
    margin-left: auto;
    background-image: url("../../../assets/imgs/loading-svg/loading-bars.svg");
    background-position: center;
    height: 200px;
    background-repeat: no-repeat;
    background-size: 150px 150px;
  }
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #ff6700;
}
</style>
