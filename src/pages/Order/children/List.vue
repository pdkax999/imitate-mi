<template>
  <div id="OrderList">
    <div class="container">
      <ol class="goodList">
        <li class="order" v-for="(order,index) in orderList" :key="index" v-if="order.orderItemVoList[0].createTime">
          <div class="headTitle">
            <ul>
              <li>{{order.createTime}}</li>
              <li class="line">|</li>
              <li>{{order.shippingVo!=null ? order.shippingVo.receiverName : 'peiqi'}}</li>
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
            <div class="name" v-for="(goods,index) in order.orderItemVoList" :key="index">
              <img v-lazy="goods.productImage"  :key="order.orderNo" />
              <p>
                <span>{{goods.productName}}</span>
                <br />
                <span>{{goods.currentUnitPrice}}X{{goods.quantity}}元</span>
              </p>
              <div class="statusPay" v-if="index === 0">
                 <a href="javascript:;" @click="$router.replace({name:'pay',query:{orderNo:order.orderNo}})" v-if="order.status===10">{{order.statusDesc}} </a>
                <a href="javascript:;" v-else>{{order.statusDesc}} </a>
              </div>
            </div>
          </div>
        </li>
      </ol>

      <div id="pag" v-if="true">
        <div class="left">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            @current-change="handleCurrentChange"
          ></el-pagination>
        </div>
      </div>

      <div class="load-more" v-if="isShow && orderList.length>0">
        <el-button :loading="loading" @click="btnLoadMore">加载更多</el-button>
      </div>

      <div
        class="scroll-more"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="403"
        v-if="false"
      ></div>
    </div>
    <div class="loading" v-if="loading"></div>
    
  </div>
</template>

<script type="text/ecmascript-6">
import infiniteScroll from "vue-infinite-scroll";
import { Button } from "element-ui";
export default {
  methods: {
    getOrderList(type) {
      const { pageSize, pageNum} = this;
      if(type!=2){

         this.loading = true;
      }
      this.busy = true; //第一次禁用  达到阈值调用回调函数   第一次满足条件
      this.axios("/orders", {
        params: {
          pageSize,
          pageNum
        }
      }).then(
        res => {
           if(type!==2){
             this.orderList = this.orderList.concat(res.list);
           }else{
             this.orderList = res.list                       
           }
          this.total = res.total;
          this.loading = false;
          this.busy = false;
          this.busy = !res.hasNextPage;
          // this.isShow = res.hasNextPage;
        }
      );
    },
    btnLoadMore() {
      this.pageNum++;
      this.getOrderList();
    },

    handleCurrentChange(num) {
      this.pageNum = num;
      this.getOrderList(2); // 1 手动点击   // 2分页
    },
    loadMore() {
      this.busy = true;
      setTimeout(() => {
        this.pageNum++;
        this.getOrderList()
      }, 500);
    },
  },

  mounted() {
    this.getOrderList();
  },

  data() {
    return {
      total: 0,
      orderList: [],
      pageNum: 1,
      pageSize: 10,
      loading: true,
      isShow: false,
      busy: false
    };
  },
  directives: { infiniteScroll },
  components: {
    [Button.name]: Button
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
            position: absolute;
            right: 0;
            a{
              color: #f60;
            }
          }
        }
      }
    }
    #pag {
      .left {
        float: right;
      }
    }

    .load-more {
      display: flex;
      justify-content: center;

      & > button {
        background-color: #ff6700;
        color: #fff;
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
