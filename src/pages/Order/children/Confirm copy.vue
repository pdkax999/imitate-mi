<template>
  <div class="order_confirm">
    <div class="container">
      <div class="addressWrapper">
        <h1 class="title">收货地址</h1>
        <div class="addressList">
          <div
            class="item"
            v-for="(us,index) in addressList"
            :class="{active:index==led}"
            @click="led=index"
            :key="us.shippingId"
          >
            <div class="info">
              <div class="name">{{us.receiverName}}</div>
              <p class="contact">
                <span>{{us.receiverMobile}}</span>
                <span>
                  <span>{{us.receiverProvince}}</span>
                  <span>{{us.receiverCity}}</span>
                  <span>{{us.receiverDistrict}}</span>
                  <span>{{us.receiverAddress}}</span>
                </span>
              </p>
            </div>
            <div class="footer">
              <span class="fa fa-window-close" @click.stop="isConfirmDelete(us)"></span>
              <span class="fa fa-link" @click.stop="isUpdateAddress(us)"></span>
              <!-- @click.stop="verifyDelete(us)" -->
            </div>
          </div>
          <div class="addAddress" @click="showModel=!showModel" v-show="addressList.length<=2">
            <div class="center">
              <span class="fa fa-plus-circle"></span>
              <span>添加新地址</span>
            </div>
          </div>
        </div>
      </div>
      <div class="goodsS">
        <h2 class="title">商品</h2>
        <ul class="goods">
          <li v-for="(good,index) in goodsList">
            <div class="phoneInfo">
              <img :src="good.productMainImage" alt />
              <span>{{good.productName}} {{good.productSubtitle}}</span>
            </div>
            <div class="priceNum">
              <span class="num">{{good.productPrice}}元x{{good.quantity}}</span>
              <span class="price">{{good.productPrice*good.quantity}}元</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="userOrderInfo">
        <div class="userAddress">
          <div class="dispatc">
            <span>配送方式</span>
            <span>包邮</span>
          </div>
          <div class="bill">
            <span>发票</span>
            <span>电子发票</span>
            <span>个人</span>
          </div>
        </div>
        <div class="totalPrice">
          <ul class="info">
            <li>
              <span>商品件数</span>
              <span class="in">{{totalQuantity}}件</span>
            </li>
            <li>
              <span>商品总价</span>
              <span class="in">{{ totalPrice}}元</span>
            </li>
            <li>
              <span>优惠活动</span>
              <span class="in">0元</span>
            </li>
            <li>
              <span>运费</span>
              <span class="in">0元</span>
            </li>
            <li>
              <span>应付总额</span>
              <span class="totalIn">{{totalPrice}}元</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="btns">
        <div class="btn2" @click="gotoPayment">
          <a href="javascript:;">去结算</a>
        </div>
        <div class="btn1">
          <a href="javascript:;" @click="$router.replace('/cart')
">返回购物车</a>
        </div>
      </div>
    </div>
    <Modelbox
      :showModel="showModel"
      @closeModel="closeModel"
      title="新增确认"
      @doSomething="addUserAddress"
    >
      <template>
        <div class="addressForm">
          <div class="inpa">
            <input type="text" placeholder="姓名" v-model="address.receiverName" />
            <input type="text" placeholder="手机号" v-model="address.receiverMobile" />
          </div>
          <div class="item1">
            <select name="prov" v-model="address.receiverProvince">
              <option value="湖北">湖北</option>
              <option value="湖南">湖南</option>
            </select>
            <select name="city" v-model="address.receiverCity">
              <option value="恩施">恩施</option>
              <option value="建始">建始</option>
            </select>
            <select name="area" v-model="address.receiverDistrict">
              <option value="建南">建南</option>
              <option value="利川">利川</option>
            </select>
          </div>
          <div class="item2">
            <textarea
              name="address"
              id="text"
              cols="30"
              rows="10"
              v-model="address.receiverAddress"
            ></textarea>
          </div>
          <div class="item3">
            <input type="text" placeholder="邮编" v-model=" address.receiverZip" />
          </div>
        </div>
      </template>
    </Modelbox>
    <Modelbox
      title="删除确认"
      :showModel="isdelete"
      @closeModel="closeDeleteModel"
      @doSomething="removeAddress"
    >
      <template>
        <span>您确认要删除此地址吗？</span>
      </template>

    </Modelbox>
  </div>
</template>

<script type="text/ecmascript-6">

import Modelbox from "../../../components/Modelbox.vue";

export default {
  computed: {
    totalQuantity() {
      const { goodsList } = this;
      return goodsList.reduce((pre, goods) => {
        return (pre += goods.quantity);
      }, 0);
    }
  },
  
  data() {
    return {
      goodsList: [], // 商品列表
      showModel: false, //更新或者增加模态框
      address: {
        receiverProvince: "",
        receiverCity: "",
        receiverDistrict: "",
        receiverName: "",
        receiverMobile: "",
        receiverAddress: "",
        receiverZip: ""
      },
      led: 0, //当前选中的下标
      addressList: [], //地址数组
      isdelete: false, //展示删除模态框
      //暂存要删除的us对象
      isAddressDele: {}
    };
  },
  mounted() {
    this.getCartList();
    this.getAddressList();
  },
  methods: {
    isConfirmDelete(us) {
      this.isdelete = true;
      this.isAddressDele = us;
    },
    getCartList() {
      this.axios("/carts").then(val => {
        this.goodsList = val.cartProductVoList.filter(
          cart => cart.productSelected
        );
        this.totalPrice = val.cartTotalQuantity;
      });
    },
    closeModel() {
      //关闭清楚表单数据
      Object.keys(this.address).forEach(key => {
        if (key !== "receiverPhone") {
          this.address[key] = "";
        }
        delete this.address.id;
      });

      this.showModel = false;
    },
    closeDeleteModel() {
      this.isdelete = false;
    },

    //表单验证
    isverify() {
      const {
        address: {
          receiverName,
          receiverMobile,
          receiverProvince,
          receiverCity,
          receiverDistrict,
          receiverAddress,
          receiverZip
        }
      } = this;

      let error = "";

      if (!receiverName) {
        error += "请输入收货人名称";
      } else if (
        !/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(
          receiverMobile
        )
      ) {
        error += "请输入正确格式的手机号";
      } else if (!receiverProvince || !receiverCity || !receiverDistrict) {
        let index = [receiverProvince, receiverCity, receiverDistrict].indexOf(
          ""
        );
        if (index != -1) {
          error += ["请选中省份", "请选择城市", "请选择区"][index];
        }
      } else if (!receiverAddress.length) {
        error += "请输入收货地址";
      } else if (receiverZip.length < 6) {
        error += "请输入六位邮编";
      }

      if (error) {
        this.$message({
          message: error,
          type: "error"
        });
      }
      return !!error;
    },
    addUserAddress() {
      //判断数据是否合法
      let result = this.isverify();
      //不合法不执行代码
      if (result) return;

      let path = this.address.id
        ? `/shippings/${this.address.id}` //更新
        : "/shippings";

      let handle = this.address.id ? "put" : "post";

      this.axios[handle](path, this.address).then(val => {
        // this.address.shippingId = val.shippingId; //给本地添加一个id
        // this.addressList.push(this.address);

        this.getAddressList(); //成功更新本地列表
        //增加还是替换
        this.$message({
          message: this.address.id ? "修改地址成功" : "添加新地址成功",
          type: "success"
        });

        this.closeModel();
      });
    },

    //获取地址列表
    getAddressList() {
      this.axios("/shippings", {
        params: {
          pageNum: 1,
          pageSize: 3
        }
      }).then(val => {
        this.addressList = val.list;
      });
    },
    //移除地址
    removeAddress() {
      this.axios.delete(`/shippings/${this.isAddressDele.id}`).then(() => {
        this.$message({
          message: "删除地址成功",
          type: "success"
        });

        this.addressList.splice(
          this.addressList.indexOf(this.isAddressDele),
          1
        );

        this.closeDeleteModel();
      });
    },
    //地址数据回显
    isUpdateAddress(us) {
      us = JSON.parse(JSON.stringify(us));

      const { address } = this;

      address.id = us.id;

      this.showModel = true;

      let keys = Object.keys(us);

      keys.forEach(key => {
        if (address[key] == undefined) {
          delete us[key];
        }
      });

      this.address = us;
    },
    gotoPayment() {
      if (this.addressList.length < 1) {
        this.$message({
          message: "收获地址至少保留一个",
          type: "warning",
          duration: 2000
        });
      }
    }


    
  },
  components: {
    Modelbox
  }
};
</script>

<style lang='scss'>
.order_confirm {
  background-color: #f5f5f5;
  padding: 35px 0;
  height: 969px-30;

  & > .container {
    background-color: #fff;
    box-sizing: border-box;
    padding: 0px 0px 40px 40px;
    .addressWrapper {
      padding-top: 38px;

      & > h1 {
        margin-bottom: 22px;
      }

      .addressList {
        margin-bottom: 30px;
        display: flex;

        .item {
          box-sizing: border-box;
          float: left;
          width: 271px;
          height: 180px;
          border: 1px solid #e5e5e5;
          margin-right: 15px;
          padding: 15px 24px;
          cursor: pointer;

          &.active {
            border-color: #ff6700;
          }

          & > .info {
            .name {
              height: 27px;
              font-size: 18px;
              font-weight: 300;
              color: #333;
              margin-bottom: 10px;
            }
            .contact {
              display: flex;
              flex-direction: column;
              font-size: 14px;
              color: #757575;

              & > span:last-child {
                height: 36px;
                span {
                  margin-right: 5px;
                }
              }
            }
          }

          & > .footer {
            height: 148px-101;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            span {
              font-size: 25px;
              color: #757575;
              height: 25px;

              &:hover {
                color: #ff6700;
              }
            }
          }
        }

        .addAddress {
          cursor: pointer;
          box-sizing: border-box;
          float: left;
          width: 271px;
          height: 180px;
          border: 1px solid #e5e5e5;
          margin-right: 15px;
          padding: 15px 24px;
          font-size: 14px;
          display: flex;
          justify-content: center;
          align-items: center;
          .center {
            text-align: center;
            display: flex;
            flex-direction: column;
            color: #e0e0e0;
            & > span:first-child {
              font-size: 35px;

              margin-bottom: 5px;
            }
          }
        }
      }
    }

    .goodsS {
      .goods {
        margin-top: 10px;
        padding: 10px 0px;
        border: 1px solid #e5e5e5;
        border-left: none;
        border-right: none;
        & > li {
          display: flex;
          height: 40px;
          justify-content: space-between;
          align-items: center;
          .phoneInfo {
            display: flex;
            align-items: center;
            img {
              width: 30px;
              height: 30px;
            }
            span {
              font-size: 16px;
              color: #333;
            }
          }
          .priceNum {
            width: 30%;
            display: flex;
            justify-content: space-between;
            font-size: 20px;

            .price {
              padding-right: 40px;
              padding-right: 44px;
              color: #f60;
              font-size: 20px;
            }
          }
        }
      }
    }

    .userOrderInfo {
      padding: 30px 0 20px 0;
      border-bottom: 2px solid #ff6700;
      .userAddress {
        margin-bottom: 30px;
        .dispatc {
          font-size: 20px;
          margin-bottom: 28px;

          span:first-child {
            margin-right: 100px;
            font-weight: bold;
          }
          span:last-child {
            font-size: 16px;
            color: #ff6700;
          }
        }

        .bill {
          font-size: 16px;
          color: #ff6700;
          span:first-child {
            margin-right: 140px;
            font-weight: bold;
            font-size: 20px;
            color: #000;
          }

          span:last-child {
            margin-left: 30px;
          }
        }
      }
    }

    .totalPrice {
      overflow: hidden;
      padding-right: 44px;
      & > ul {
        float: right;
        li {
          width: 200px;
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;

          span:first-child {
            font-size: 16px;
            color: #666;
          }
          span:last-child {
            color: #ff6700;
            font-size: 16px;
          }
        }

        li:last-child {
          margin-top: 30px;
          align-items: center;
          span:last-child {
            font-size: 28px;
            color: #ff6700;
          }
        }
      }
    }

    .btns {
      margin-top: 37px;
      overflow: hidden;
      div {
        float: right;
        width: 202px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 18px;

        margin-left: 20px;
      }

      .btn1 {
        background-color: #b0b0b0;
        a {
          color: #fff;
        }
      }
      .btn2 {
        background-color: #ff6700;
        a {
          width: 100%;
          height: 100%;
          display: inline-block;
          color: #fff;
        }
      }
    }
  }
  .addressForm {
    .inpa {
      height: 40px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      input {
        height: 40px;
        width: 48%;
        padding-left: 10px;
        border: 1px solid #f2f2f2;
      }
    }

    .item1 {
      margin-bottom: 20px;
      select {
        box-sizing: border-box;
        // width: 50px;
        height: 40px;
        margin-right: 15px;
        border: 1px solid #f2f2f2;
      }
    }
    .item2 {
      border: 1px solid #f2f2f2;
      height: 65px;
      margin-bottom: 20px;
      #text {
        box-sizing: border-box;
        border: none;
        width: 100%;
        height: 100%;
        font-size: 20px;
        padding: 20px;
        resize: none;
      }
    }
    .item3 {
      height: 40px;

      input {
        width: 50%;
        height: 100%;
        border: 1px solid #f2f2f2;
        padding-left: 10px;
      }
    }
  }
}
</style>
