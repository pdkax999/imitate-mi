<template>
  <div class="order_confirm">
    <div class="container">
      <div class="addressWrapper">
        <h1 class="title">收货地址</h1>
        <div class="addressList">
          <div class="addAddress"></div>
        </div>
      </div>
      <!-- <div class="goodsList">
        <h1 class="title">
          商品
        </h1>
        <ul class="goods">
          <li></li>
        </ul>
      </div>-->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang='scss'>
.order_confirm {
  background-color: #f5f5f5;
  padding-top: 30px;
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
        display: flex;
        .addAddress {
          box-sizing: border-box;
          float: left;
          width: 271px;
          height: 180px;
          border: 1px solid #e5e5e5;
          margin-right: 15px;
          padding: 15px 24px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
