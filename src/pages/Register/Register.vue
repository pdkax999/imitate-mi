<template>
  <div>

    <div class="register">

        <div class="form-register">
            <div class="logo">
              <img src="https://account.xiaomi.com/static/res/349d9c1/account-static/respassport/acc-2014/img/milogo.png" alt="">
            </div>
          <div class="h1">
            注册小米帐号
          </div>

         <div class="form">
           <div class="input">
             <input type="text" placeholder="请输入注册账号">
           </div>
           <div class="input">
             <input type="text" placeholder="请输入注册密码">
           </div>
           <div class="input">
             <input type="text" placeholder="请输入注册邮箱">
           </div>
           <div class="btn">
           <a href="javascript:;">立即注册</a>
           </div>
         </div>
          <p class="tips">
           <span>
             已阅读并同意：小米 
           </span>
           <span class="bold">用户协议</span>
           <span>和</span><span class="bold">隐私政策</span>
         </p>
        
        </div>

    </div>

    <NavFooter :showBar="false"/>

  </div>
</template>

<script type="text/ecmascript-6">
import NavFooter from "../../components/NavFooter.vue";
  export default {

    components:{

      NavFooter

    }

  }
</script>
<style lang='scss'>
  .register{
    height: 620px;
    padding-bottom: 10px;
    background-color: #F9F9F9;
    position: relative;

    .form-register{
      width: 854px;
      height: 80%;
      box-sizing: border-box;
      background-color:#fff;
      position: absolute;top: 0;right: 0;bottom: 0;left: 0;margin: auto;
      padding: 0 252px;

     .logo{
       margin-top: 20px;
      display: flex;
      justify-content: center;padding-bottom: 40px;
     }   

      .h1{
        text-align: center;
        font-size: 30px;font-weight: bold;
      }

      .form{
        padding: 30px 0;

        .input{
         margin-bottom:20px;
         border: 1px solid rgb(229, 229, 229);
         input{
          width: 312+36px;
          height: 14+36px;
          padding: 18px;
          border: none;
         }

         }

        .btn{
         margin-top:10px;
         width: 350px;
         height: 50px;
         background-color: #ff6700; 
        text-align: center;
        a{
          line-height: 50px;
          font-size: 16px;
          color: #fff;
          
        }
        }


      }
    }

     .tips{
       text-align: center;
        padding-bottom: 10px;
        color: #9D9D9D;

        .bold{
          
          font-weight: bold;
          color: #000;
        }
      }



  }




 
</style>
