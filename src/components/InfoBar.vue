<template>
  <div class="infoBar" :class="{bar_flex:isAdsorb}">
    <div class="container">
      <h1 class="title">
        {{productInfo.name}}
      </h1>
      <!-- 概述|参数|用户评价 -->
    <ul class="guided">
      <li>概述</li>
      <li class="line">|</li>
      <li >参数</li>
      <li class="line">|</li>
      <li >用户评价</li>
    </ul>
    <div class="buy" v-if="isShowBay"><a href="/detail/42">
        立即购买
      </a></div>
    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:['productInfo'],
    data(){

      return {
        isAdsorb:false,
       
      }

    },
    props:{
      isShowBay:{
        type:Boolean,
         default: true
      }
    },
    mounted(){

      this.initBar()

    },
    methods:{
    initBar(){

      window.addEventListener('scroll', ()=> {
        
       let   distance = document.body.scrollTop || document.documentElement.scrollTop
      
        
        
        if(distance>152){

          this.isAdsorb = true
       
        }else{
          
          this.isAdsorb = false
        
        
        }



      })

    }
    }


  }
</script>

<style lang='scss'>
    
.infoBar{
  position: relative;
  z-index: 999;
  width: 100%;
  border-top: 1px solid #e5e5e5;
  background-color: #fff;
   .container{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
      display: flex;
   }

  .guided{
    overflow: hidden;
    padding-left: 840-100px;
    display: flex;
    justify-content: center;
    align-items: center;
    li{
       float: left;
       color: #666;
       font-size: 16px;

    }

    .line{
      margin: 17px;
    }

  }

   .buy{
     
    width: 110px;
    line-height: 30px;
    text-align: center;
    background-color: #f60;
    
    border: none;
    cursor: pointer;

    a{
      color: #fff;
    }

   }

   

}
.bar_flex{
position: fixed;
top: 0;
left: 0;
box-shadow: 0 5px 5px #ccc;    

}

 
</style>
