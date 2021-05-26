<template>
  <div class="footer">
    <div class="footer-afterSale">
      <div class="info container">
        <div class="item">
         <span class="fa fa-wrench"></span> 预约维修服务
        </div>
        <div class="item">
         <span class="fa fa-address-book"></span> 7天无理由退货
        </div>
        <div class="item">
         <span class="fa fa-thermometer-0"></span> 15天免费换货
        </div>
        <div class="item">
         <span class="fa fa-user-o"></span> 满150元包邮
        </div>
      </div>
    </div>
    <div class="footer-info">
      <div class="logo">
        <div class="img"> <img src="../assets/imgs/logo-footer.png" alt=""></div>
        <span>小米商场</span>
      </div>
       <p class="copyright">Copyright ©2020  All Rights Reserved.</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang='scss'>
@import "../assets/scss/mixin.scss";
 .footer-afterSale{
 
  .info{
  height: 89px;
  background: #fff;
  display: flex;
  align-items: center;
    .item{
      text-align: center;
      width: 25%;
      color: #666;
      font-size: 16px;
      position: relative;
      span{

        margin-right: 5px;

      } 

    &::before{
      position: absolute;
      content: "";
      width: 1px;height: 30px;
      background-color: #d7d7d7;
      right: 0; top: 50%; transform: translateY(-50%);


    }

    }

  }

 }

 .footer-info{

    border-top:4px solid #ff6700;
    .img{
      width: 53px;
      height: 36px;
     
      margin:0 auto;
       margin-bottom: 20px;
      img{
        width: 100%;
        height: 100%;
        margin:0 auto;
      }
    }

    .logo{
       margin-bottom: 20px;
      span{
        font-size: 16px;
        color: #fff;
      }
    }
    display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
    height: 200px;
    background-color: #333333;


    .copyright{
     color: #fff;
     font-size: 16px;
    }
 }
</style>
