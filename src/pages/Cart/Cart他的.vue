<template>
  <div class="cart">
    <Navply />
    <div class="goodsList">
      <div class="container">
        <div class="totalDetail">
          <div class="col-1">
           
            <span :class="{'fa fa-check-square': selectlGoodsAll}" @click="isSelectAll"></span>
           
            全选
          </div>
          <div class="col-3">商品名称</div>
          <div class="col-1">单价</div>
          <div class="col-2">数量</div>
          <div class="col-1">小计</div>
          <div class="col-1">操作</div>
        </div>
        <ul class="goodsCarts">
          <li v-for="(cart) in cartList" :key="cart.id">
            <div class="select col-1">
              <!-- @click="isSelectGoods(cart)" -->
              <span
                :class="{'fa fa-check-square':cart.productSelected}"
                @click="updateProductState('',cart)"
              ></span>
            </div>
            <div class="detail col-3">
              <a href="javascript:;">
                <img v-lazy="cart.productMainImage" />
              </a>
              <span>{{`${cart.productName},${cart.productSubtitle}`}}</span>
            </div>
            <div class="price col-1">
              <span>{{cart.productPrice}}</span>
            </div>
            <div class="total col-2">
              <div class="num">
                <a href="javascript:;" @click="updateProductState('-',cart)">-</a>
                <span>{{cart.quantity}}</span>
                <a href="javascript:;" @click="updateProductState('+',cart)">+</a>
              </div>
            </div>
            <div class="allPrice col-1">
              <span>{{cart.productPrice*cart.quantity}}</span>
            </div>
            <div class="opera col-1">
              <span class="fa fa-close" @click="removeProduct(cart)"></span>
            </div>
          </li>
        </ul>
        <div class="cartFooter">
          <div class="allTotal">
            <a href="/">继续购物</a>
            <span>
              共
              <span class="bg">{{cartList.length}}</span>件商品,&nbsp;&nbsp;已选择
              <span class="bg">{{totalNum}}</span>件
              <!-- {{pitch}} -->
            </span>
          </div>
          <div class="allPrice">
            <div class="all">
              合计:
              <span>{{totalPrice}}元</span>
            </div>
            <div class="btn" @click="gotoBuy">
              <a href="javascript:;">去结算</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NavFooter />
  </div>
</template>

<script type="text/ecmascript-6">
import Navply from "../../components/Navply.vue";
import NavFooter from "../../components/NavFooter.vue";
export default {

    //所有的运算都在后台我只负责发请求哪对应数据
  data() {
    return {
      cartList: [],
      totalPrice: 0,
      totalNum: 0, // 已选择商品总数
      selectlGoodsAll: false
    };
  },
  mounted() {
    this.getCartList();
  },
  methods: {
    getCartList() {
      this.axios("/carts").then(val => {
        this.reqRenderDate(val);
      });
    },
    removeProduct(cart) {
      this.axios.delete(`/carts/${cart.productId}`).then(val => {
        this.reqRenderDate(val);

        this.$message({
          message: "删除成功",
          type: "success"
        });
      });
    },
    updateProductState(type, cart) {
      let quantity = cart.quantity;

      let selected = cart.productSelected;

      if (type == "+") {
        if (quantity >= cart.productStock) {
          this.$message({
            message: "商品库存不足",
            type: "warning",
            duration: 1000
          });

          return;
        }
        quantity++;
      } else if (type == "-") {
        if (quantity <= 1) {
          this.$message({
            message: "商品至少保留一件",
            type: "warning",
            duration: 1000
          });
          return;
        }

        quantity--;
      } else {
        selected = !selected;
      }
      this.axios
        .put(`/carts/${cart.productId}`, {
          quantity,
          selected
        })
        .then(res => {
          console.log(res);

          this.reqRenderDate(res);
        });
    },
    isSelectAll() {
      let path = !this.selectlGoodsAll
        ? "/carts/selectAll"
        : "/carts/unSelectAll";

      this.axios.put(path).then(val => {
        this.reqRenderDate(val);
      });
    },
    reqRenderDate(res) {

      this.cartList = res.cartProductVoList;

      this.totalPrice = res.cartTotalPrice;
      this.selectlGoodsAll = res.selectedAll && res.cartProductVoList.length>0;
      this.totalNum = res.cartProductVoList.filter(
        item => item.productSelected
      ).length;
      
    },
    gotoBuy(){
    let result = this.cartList.every((item)=> !item.productSelected)
    if(result){

       this.$message({
            message: "商品至少选中一件",
            type: "warning",
            duration: 1000
       });

       return 
    }
    this.$router.replace('/order/confirm')
    } 
  },
  components: {
    Navply,
    NavFooter
  }
};
</script>

<style  lang='scss'>
.goodsList {
  background-color: #f5f5f5;
  padding-top: 30px;
  padding-bottom: 114px;

  .container {
    background-color: #fff;
    .totalDetail {
      display: flex;
      height: 79px;
      line-height: 79px;
      font-size: 14px;
      color: #999;
      text-align: center;

      div:first-child {
        span {
          display: inline-block;
          width: 22px;
          height: 22px;
          border: 1px solid #e5e5e5;
          vertical-align: middle;
          margin-right: 10px;
          cursor: pointer;
          color: #ff6700;
          line-height: 22px;
          font-size: 25px;
          border-radius: 6px;
        }
      }
    }

    .goodsCarts {
      background-color: #fff;

      & > li {
        display: flex;
        height: 125px;
        border-top: 1.5px solid #e5e5e5;
        align-items: center;
        text-align: center;
        font-size: 16px;

        & > div:first-child {
          span {
            display: inline-block;
            width: 22px;
            height: 22px;
            border: 1px solid #e5e5e5;
            vertical-align: middle;
            margin-right: 10px;
            cursor: pointer;
            color: #ff6700;
            line-height: 22px;
            font-size: 25px;
            border-radius: 6px;
          }

          & + div {
            display: flex;
            align-items: center;
            a {
              float: left;
              width: 80px;
              height: 80px;
              margin-right: 30px;
            }
            span {
              float: left;
              font-size: 16px;
              color: #333;
            }
          }
        }

        .total {
          .num {
            display: inline-block;
            text-align: center;
            line-height: 40px;
            border: 1px solid #e5e5e5;
            a {
              display: inline-block;
              width: 50px;
              height: 40px;
            }
            span {
              display: inline-block;
              width: 50px;
              height: 40px;
            }
          }
        }

        .allPrice {
          color: #ff6700;
        }
        .opera {
          .fa {
            font-size: 18px;
            cursor: pointer;
          }
        }
      }
    }

    .col-1 {
      flex: 1;
    }
    .col-2 {
      flex: 2;
    }
    .col-3 {
      flex: 3;
    }
    .cartFooter {
      padding-top: 20px;
      height: 50px;
      background-color: #f5f5f5;
      .allTotal {
        float: left;
        color: #333;
        line-height: 50px;
        font-size: 14px;
        a {
          font-size: 14px;
          color: #333;
          margin-right: 37px;
        }
        .bg {
          margin: 0 7px;
          color: #ff6700;
        }
      }

      .allPrice {
        float: right;
        div {
          float: left;
        }
        .all {
          line-height: 50px;
          font-size: 14px;
          color: #ff6700;
          span {
            font-size: 20px;
          }
        }
        .btn {
          width: 202px;
          height: 50px;
          background-color: #ff6700;
          text-align: center;
          line-height: 50px;
          margin-left: 37px;
          a {
            color: #fff;
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>
