<template>
  <div class="login">
    <div class="header container">
      <a href="/">
        <img src="../../assets/imgs/login-logo.png" alt />
      </a>
    </div>
    <div class="main">
      <div class="container">
        <div class="form-login">
          <p>
            <span>账号登录</span>
            <span>扫码登录</span>
          </p>
          <div class="form-input">
            <input type="text" placeholder="请输入帐号" v-model="username" />
            <input type="password" placeholder="请输入密码" v-model="password" />
            <button @click="gotoLogin">登录</button>
          </div>
          <p class="tips">
            <a href="javascript:;">手机短信登录/注册</a>
            <span>
              <a href="/register">立即注册</a>
              <span class="line">|</span>
              <span>忘记密码</span>
            </span>
          </p>
        </div>
      </div>
    </div>

    <div class="footer">
      <p>Copyright ©2021 mi.futurefe.com All Rights Reserved.</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      username: "peiqi111",
      password: "123456"
    };
  },
  methods: {
    gotoLogin() {
      const { username, password } = this;

      if (!username || !password) {
        this.$message({
          message: "请输入正确的用户名和密码",
          type: "error"
        });

        return;
      }

      this.axios
        .post("/user/login", {
          username,
          password
        })
        .then(val => {

         
        

          this.$cookie.set("usernameId", val.id, { expires: "Session" });

          this.$store.dispatch("getUserInfo", val);
          
          this.$message({
            message: '登录成功',
            type: "success",
            duration: 2000
          });

          if (this.$route.path !== "/index") {
            this.$router.replace("/index");
          }
        });
    }
  }
};
</script>

<style lang="scss">
.login {
  div.header {
    height: 113px;
    & > a {
      float: left;
      width: 230px;
      height: 113px;
    }
  }

  .main {
    height: 576px;
    background-image: url("../../assets/imgs/login-bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    

    & > .container {
      position: relative;
      height: 100%;
    }

    div.form-login {
      width: 348px;
      height: 510px;
      padding: 0 31px;
      background-color: #fff;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: auto;
      margin: auto 0;

      & > p:first-child {
        height: 23px;
        padding: 40px 0 49px 0;
        display: flex;
        & > span {
          width: 50%;
          line-height: 23px;
          font-size: 24px;
          text-align: center;
          font-weight: bold;
        }
        span:first-child {
          color: #f60;
          position: relative;
          &::after {
            content: " ";
            width: 3px;
            position: absolute;
            height: 23px;
            background-color: #333;
            right: -1px;
          }
        }
      }

      .form-input > input {
        width: 312+36px;
        height: 14+36px;
        padding: 18px;
        margin-bottom: 20px;
        border: 1px solid #e5e5e5;
      }

      button {
        height: 50px;
        width: 100%;
        margin: 10px 0 14px 0;
        border: none;
        background-color: #f60;
        font-size: 16px;
        color: #fff;
        cursor: pointer;
      }

      .tips {
        color: #a69999;

        & > a {
          color: #f60;
          font-size: 14px;
        }

        & > span {
          float: right;
          font-size: 14px;
          a {
            color: #a69999;
            font-size: 14px;
          }
          .line {
            margin: 0 7px;
            font-weight: bold;
            transform: translateY(-4px);
          }
        }
      }
    }
  }

  .footer {
    color: #999;
    font-size: 16px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
}
</style>
