<template>
  <div class="boo">
    <div id="zong">
      <!--header-->
      <header>
        <a href="../../start.html">
          <img src="../../static/img/login_img/headerPoint.jpg"/>
        </a>
      </header>
      <!--section-->
      <section>
        <div class="topic">商户账号登录</div>
        <div class="loginInfo">
          <div class="uname">
            <input type="text" placeholder="输入总店账号/分店账号"/>
          </div>
          <div class="upass">
            <input type="password" placeholder="输入登录密码" />
          </div>
          <button class="loginBtn">登录</button>
          <div class="foot">
            <p class="footLeft">手机快速登录</p>
            <p class="footRight">忘记密码？</p>
          </div>
        </div>
      </section>
    </div>
    <router-link tag="a" to="/Register" class="newReg">
      <p>新用户注册</p>
      <span></span>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "Login"
    }

</script>
<style scoped>
 @import "../assets/scss/login.css";
</style>
