<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  mounted() {

  if(!this.$cookie.get("usernameId")) return 
   this.autoLogin()

  },
  methods: {
    autoLogin() {
      this.axios.get("/user").then(val => {
     
      this.$store.dispatch("getUserInfo", val);
      });
    }
  }
};
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
</style>
