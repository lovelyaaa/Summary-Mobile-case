<template>
  <section>
    <img src="static/img/order-no01.png"/>
    <p>登录可查看订单，收藏记录</p>
    <a>登录</a>
  </section>
</template>

<script>
    export default {
        name: "OrderNoneSection"
    }
</script>

<style scoped>

  /*section部分*/
  section{
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
  section img{
    width: 1.4rem;
    height: 1.4rem;
    margin: 0 auto;
  }
  section p{
    font-size: 0.13rem;
    color: #cacaca;
    margin: 0 auto;
    line-height: 0.34rem;
    text-align: center;
  }
  section a{
    display: block;
    width: 1.4rem;
    height: 0.4rem;
    color: #fff;
    font-size: 0.16rem;
    line-height: 0.4rem;
    line-height: 0.4rem;
    background-color: #9edfd7;
    text-align: center;
    border-radius: 0.04rem;
    margin: 0 auto;
  }

</style>
