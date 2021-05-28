<template>
  <div class="header">
     <header class="top-header">
        <div class="container">
          <div class="topbar-menu">
              <a href="javascript:;">小米商城</a>
              <a href="javascript:;">MUI</a>
              <a href="javascript:;">云服务</a>
              <a href="javascript:;">协议规则</a>
          </div>
          <div class="user-info">
            <!-- <a href="javascript:;">current</a>
            <a href="javascript:;">退出</a>
            <a href="javascript:;">我的订单</a> -->
            <a href="/login">登录</a>
            <a href="javascript:;" class="my-cart">
              <span class="cart">
              </span>
              购物车(0)
            </a>
          </div>
        </div>
     </header>

     <div class="bot-header">
       <div class="container">
         <div class="header-logo">
           <a href="javascript:;">
             <img    src="../assets/imgs/logo-mi2.png" alt="logo">
           </a>
         </div>
         
           <ul class="nav-menu">
             <li @mouseenter="showGoods=true" @mouseleave="showGoods=false">
               <a href="javascript:;">小米手机</a>
               <div class="productList "  :class="{productListHG:showGoods}">
                <ul class="goods">
                  <li v-for="(pro,index) in productList" :key="index">
                      <a href="jacascript:;">
                        <div class="product-img">
                          <img  v-lazy="pro.mainImage" alt="">
                        </div>
                        <div class="product-info">
                          <span>{{pro.name}}</span>
                          <span>{{ pro.price | money}}</span>
                        </div>
                      </a>
                  </li>
                </ul>
               </div>
             </li>
             <li><a href="javascript:;">RedMi红米</a></li>
             <li><a href="javascript:;" @mouseenter="showGoods=true" @mouseleave="showGoods=false">电视</a>
<!-- 
               <div class="productList container" :class="{productListHG:showGoods}">
               </div>  -->

            </li>
           </ul>
        
         <div class="nav-serach">
          
             <span><input type="text"></span> <span><i class="fa  fa-search"></i></span>
           
         </div>
       </div>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">



  export default {
    
    data(){

      return{
        showGoods:false,
        productList:[]
      }

    },
    mounted(){

      this.getProductList()

    },
    methods:{
    getProductList(){

      this.axios.get('/products',{
        
        params:{
            categoryId:'100012',
            pageSize:6
       }

      }).then((res)=>{
        
       this.productList=res.list
      
      })
     

     }  
    },
    filters:{
    money(val){
     
     if(!val)  return

     return  `￥ ${val}.00元`
     
    }
    }
  }
</script>


<style lang='scss'>
@import "../assets/scss/base.scss";
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";

  .header{
   
    .top-header{
     background-color: $colorB;   
     .container{
       height: 39px;
       
       @include flex();

      .topbar-menu{
       
       display: flex;
       align-items: center;

        &>a{
          margin-left: 17px;
          color: #b0b0b0;
        }  

      }

      .user-info{
        display: flex;

        a{
          display: block;
          color: #b0b0b0;
          line-height: 39px;
        }

        .my-cart{
          text-align: center;
          width: 110px;
          background-color: #ff6700;
          color: #fff;
          margin-left: 17px;
          
         
          .cart{
            display: inline-block;
            width: 16px;
            height: 12px;
            background-image: url("../assets/imgs/icon-cart-checked.png");
            background-repeat: no-repeat;
            background-size: contain;

          }
        }


      }


     } 

    }

    .bot-header{
      position: relative;
      .container{
        @include flex();
        height: 112px;
        .header-logo{
          width: 56px;
          height: 56px;
          a{
            width: 100%;
            height: 100%;
          }

        }

        .nav-menu{      
          width: 609px;
          padding-left: 203px;
          height: 100%;
          display: flex;
          align-items: center;

          &>li{
           height: 100%;
          
           &:hover> a{
             color: #ff6700;

           } 

          }
        


          a{
            display: block;
            color: #000;
            font-size: 16px;
            font-weight: bold;
            margin-left: 20px;
            line-height: 112px;
           
          }

          .productList{
              width: 1226px;
              height: 0;
              position: absolute;
              left: 0;
              opacity: 0;
              top: 112px; z-index: 12;
              transition: all .5s;
              overflow: hidden;
              background-color: #fff;
              box-shadow:0px 7px 6px 0px rgba(0, 0, 0, 0.11);
          }

           //动态显示 
          .productListHG{
            height: 220px;
            opacity: 1;
          }

          .goods{
            width: 100%;
            height: 100%;
            overflow: hidden;

           li{
            float: left; 
            width:204.33333px;
            height: 220px;
            position: relative;
            
              &::after{
                content: " ";
                position: absolute;height: 100px; width: 1px;
                background-color: #d7d7d7;top: 26px;right: 0;

              }
            
             a{
               width: 161px;
               height: 188px;
               margin: 0 auto;

               .product-img{
                 margin-top: 26px;
                 height: 111px;
               }

               .product-info{
                 display: flex;
                 flex-direction: column;
                 line-height: 23px;
                 font-size: 12px;
                 height: 30px;
                 text-align: center;
                  margin-top: 10px;

                 &>span:last-child{
                   
                   color: #ff6700;

                 }
               }

             }



           }

          }

        }

        .nav-serach{
          width: 319px;
          height: 52px;box-sizing: border-box;
          display: flex;
          border: 1px solid #e0e0e0;
            &>span:first-child{
            width: 80%;
            height: 100%;
            input{
              width: 100%;
              height: 100%;
              border: none;
              font-size: 20px;
              padding-left: 14px;
            }
          }
         &>span:last-child{
             box-sizing: border-box;
              border-left:1px solid #e0e0e0 ;
              width: 20%;
              height: 100%;
              text-align: center;
               i{
                 font-size: 20px;
                 color: #6E6E6E;
                 @include height(52px);
               }

            }

        }  
      }

    }

   }




</style>
