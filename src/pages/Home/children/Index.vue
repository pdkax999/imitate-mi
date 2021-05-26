<template>
<div class="container main">

  <div class="wrapper-info">
    <div class="menu-detail">
     <div class="menuLeft">
       <ul>
         <li>
           <a href="javascript:;">手机 电话卡  <span class="fa  fa-angle-right"></span></a>
           <div class="categoryDetail">


           </div>
         </li>
         <li>
           <a href="javascript:;">电视 盒子  <span class="fa  fa-angle-right"></span></a>
         </li>
         <li>
           <a href="javascript:;">笔记本 平板 <span class="fa  fa-angle-right"></span></a>
         </li>
         <li>
           <a href="javascript:;">家电 插线板 <span class="fa  fa-angle-right"></span></a>
         </li>
         <li>
           <a href="javascript:;">出行 穿戴 <span class="fa fa-angle-right"></span></a>
         </li>
         <li>
           <a href="javascript:;">智能 路由器 <span class="fa fa-angle-right"></span></a>
         </li>
        
         <li>
           <a href="javascript:;">电源 配件<span class="fa fa-angle-right"></span></a>
         </li>
         <li>
           <a href="javascript:;">生活 箱包<span class="fa fa-angle-right"></span></a>
         </li>
       </ul>


     </div>
   <div class="slideShow">

      <swiper :options="swiperOptions">

          <swiper-slide>
          
            <a href="javascript:;"><img src="../../../assets/imgs/slider/slide-1.jpg" alt=""></a>
          </swiper-slide>
          <swiper-slide>   <a href="javascript:;"><img src="../../../assets/imgs/slider/slide-2.jpg" alt=""></a></swiper-slide>
          <swiper-slide>   <a href="javascript:;"><img src="../../../assets/imgs/slider/slide-3.jpg" alt=""></a></swiper-slide>
          <swiper-slide>  <a href="javascript:;"><img src="../../../assets/imgs/slider/slide-4.jpg" alt=""></a></swiper-slide>
          <swiper-slide>   <a href="javascript:;"><img src="../../../assets/imgs/slider/slide-5.jpg" alt=""></a></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
   </div>
</div>
  <div class="banner">
      <a href="javascript:;">
          <img src="../../../assets/imgs/banner-1.png" alt="">  
      </a>
  </div>   

  </div>

     
   </div>
</template>

<script type="text/ecmascript-6">

import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
  components:{
    swiper, 
    swiperSlide 
  },
   data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
          },
            loop : true,
          effect : 'cube',
            cubeEffect: {
              shadow:false,
              
          
          
        },
        navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
          // autoplay:true,
          loop:true,
         
        }
      }
    },
    
  
  
  }
</script>
<style lang='scss'>

  .main{

    .wrapper-info{
      height: 641px;
      // background: #bfa;

    }
    .menuLeft{
      position: absolute;
      left: 0;
      top: 0;
      width: 264px;
      height: 399px;
      padding:26px 0;
      z-index: 5;
      background-color: rgba(85,88,90,.48);

        ul{

          li{
           
            height: 50px;
            a{
              line-height: 50px;
              color: #fff;
              font-size: 16px;
              padding:0  30px;
              display: flex;
              align-items: center;
              justify-content: space-between;

              .fa{
                font-size: 20px;
              }
            }
            &:hover{
              background-color: #ff6700;
            }
          }

          &>li:first-child:hover  .categoryDetail{
            display: block;

          }

        }

        .categoryDetail{

            width: 962px;height: 451px;
            position: absolute;
            background: #fff;
            left: 264px;top: 0;
            border: 1px solid #e5e5e5;
            display: block;

        }

    }

    .banner{
      height: 130px;
    }
   .slideShow{
      
      height: 451px;

      .swiper-pagination-bullets{
        bottom: 15px;
      }

      .swiper-container{
        height: 451px;
      } 
      .swiper-button-prev{
        left: 274px;
      }
   }

  }

</style>
