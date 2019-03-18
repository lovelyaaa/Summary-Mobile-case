<template>
  <div class="section01">
    <div class="section01-box">
      <img src="static/img/order-header-01.png"/>
      <p>待付款</p>
    </div>
    <div class="section01-box">
      <img src="static/img/order-header-01.png"/>
      <p>待付款</p>
    </div>
    <div class="section01-box">
      <img src="static/img/order-header-01.png"/>
      <p>待付款</p>
    </div>
    <div class="section01-box">
      <img src="static/img/order-header-01.png"/>
      <p>待付款</p>
    </div>
    <div class="section01-box">
      <img src="static/img/order-header-01.png"/>
      <p>待付款</p>
    </div>

  </div>
</template>

<script>
    export default {
        name: "OrderSection01"
    }
</script>

<style scoped>
  .section01{
    width: 100%;
    height: 0.83rem;
    display: flex;
    justify-content: space-around;
    background-color: #f7f8fa;
  }
  .section01-box{
    width: 1.05rem;
    height: 0.83rem;
  }
  .section01-box img{
    width: 0.4rem;
    height: 0.4rem;
    margin: 0.1rem auto 0;
  }
  .section01-box p{
    font-size: 0.12rem;
    text-align: center;
  }

</style>
