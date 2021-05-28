<template>
  <div>
    <div class="register">
      <div class="form-register">
        <div class="logo">
          <img
            src="https://account.xiaomi.com/static/res/349d9c1/account-static/respassport/acc-2014/img/milogo.png"
            alt
          />
        </div>
        <div class="h1">注册小米帐号</div>

        <div class="form">
          <div class="input">
            <input type="text" placeholder="请输入注册账号" v-model="username" />
          </div>
          <div class="input">
            <input type="text" placeholder="请输入注册密码" v-model="password" />
          </div>
          <div class="input">
            <input type="text" placeholder="请输入注册邮箱" v-model="email" />
          </div>
          <div class="btn" @click="isVerify">
            <a href="javascript:;">立即注册</a>
          </div>
        </div>
        <p class="tips">
          <span>已阅读并同意：小米</span>
          <span class="bold">用户协议</span>
          <span>和</span>
          <span class="bold">隐私政策</span>
        </p>
      </div>
    </div>

    <NavFooter :showBar="false" />
  </div>
</template>

<script type="text/ecmascript-6">
import NavFooter from "../../components/NavFooter.vue";
export default {
  data() {
    return {
      username: "",
      password: "",
      email: ""
    };
  },
  components: {
    NavFooter
  },
  methods: {
    isVerify () {
      const { username, password, email } = this;

      let errorStr = "";

      if (!username) {
        errorStr = "用户名不能为空";
      } else if (username.length < 5) {
        errorStr = "用户名长度必须大于5位";
      } else if (!password) {
        errorStr = "密码不能为空";
      } else if (password.length < 5) {
        errorStr = "密码长度必须大于5位";
      } else if (!email) {
        errorStr = "邮箱不能为空";
      } else if (!/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email)) {
        errorStr = "邮箱格式不正确";
      }

      if (errorStr) {
        this.$message.error(errorStr);
        return;
      }

      this.addUser(username, password, email)
    },
    addUser(username, password, email){

      this.axios.post('/user/register',{
        username, password, email
      }).then((val)=>{
        
          this.$message({
          message: '恭喜你，注册成功',
          type: 'success'
         });

        window.location.replace('/login');

      })
    }
  }
};
</script>
<style lang='scss'>
.register {
  height: 620px;
  padding-bottom: 10px;
  background-color: #f9f9f9;
  position: relative;

  .form-register {
    width: 854px;
    height: 80%;
    box-sizing: border-box;
    background-color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    padding: 0 252px;

    .logo {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      padding-bottom: 40px;
    }

    .h1 {
      text-align: center;
      font-size: 30px;
      font-weight: bold;
    }

    .form {
      padding: 30px 0;

      .input {
        margin-bottom: 20px;
        border: 1px solid rgb(229, 229, 229);
        input {
          width: 312+36px;
          height: 14+36px;
          padding: 18px;
          border: none;
        }
      }

      .btn {
        margin-top: 10px;
        width: 350px;
        height: 50px;
        background-color: #ff6700;
        text-align: center;
        cursor: pointer;
        a {
          line-height: 50px;
          font-size: 16px;
          color: #fff;
        }
      }
    }
  }

  .tips {
    text-align: center;
    padding-bottom: 10px;
    color: #9d9d9d;

    .bold {
      font-weight: bold;
      color: #000;
    }
  }
}
</style>
