<template>
    <div>
      <header>
        <a href="../../start.html">
          <img class="headImg" src="../../static/img/Register_img/headerPoint.jpg"/>
        </a>
        <p>注册账号</p>
      </header>
      <div class="full"></div>
      <section>
        <div class="uid">
          账号
          <input type="text" placeholder="请输入邮箱格式的账号名"/>
        </div>
        <div class="upass">
          密码
          <input type="password" placeholder="请输入8-14位密码"/>
        </div>
        <div class="utel">
          手机号
          <input type="password" placeholder="请输入您的手机号"/>
        </div>
        <div class="uselect">
          验证码
          <input type="password" placeholder="请输入短信验证码"/>
          <button>验证码</button>
        </div>
        <div class="problem">
          验证手机后，账号名和手机号均可登录
        </div>
      </section>
      <footer>
        <button id="register"><a href="start.html">立即注册</a></button>
      </footer>
    </div>
</template>

<script>
    export default {
        name: "Register"
    }
</script>

<style scoped>
  @import "../assets/scss/Register.css";
</style>
