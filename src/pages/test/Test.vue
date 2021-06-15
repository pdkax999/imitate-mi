<template>
  <div style="height:1000px">
    <div
    id="box"
      class="scroll-more"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
    ></div>
    <!-- <div class="box"></div> -->
  </div>
</template>

<script type="text/ecmascript-6">
import infiniteScroll from "vue-infinite-scroll";
export default {
  methods: {
    loadMore() {
      console.log("到底了");
    }
  },
   directives: { infiniteScroll },
};
</script>

<style lang='scss'>
// #box {
//   width: 100%;
//   height: 20px;
//   background-color: red;
// }
#box{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 293px;
  background-color: red;
  
}
</style>

