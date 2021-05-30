<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  mounted() {


  //  this.autoLogin()

  },
  methods: {
    // autoLogin() {
    //   this.axios.get("/user").then(val => {
    //     console.log(val);

    //     this.$store.dispatch("getUserInfo", val);

    //     // if (this.$route.path !== "/index") {
    //     //   this.$router.replace("/index");
    //     // }
    //   });
    // }
  }
};
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
</style>
