<template>
  <div class="section03">
    <div class="section03_box">
      <h1>限时秒杀</h1>
      <p>23家店铺开抢中 00:47:11</p>
      <img src="static/img/shop-13.png"/>
    </div>
    <div class="section03_box">
      <h1>限时秒杀</h1>
      <p>23家店铺开抢中 00:47:11</p>
      <img src="static/img/shop-13.png"/>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ShopSection03"
    }
</script>

<style scoped>
  .section03{
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: .2rem;
  }
  .section03_box{
    width: 45%;

  }
  .section03_box h1{
    font-size: .15rem;
    line-height: .15rem;
    margin: .15rem 0 .1rem;
  }
  .section03_box p{
    font-size: .12rem;
    line-height: .12rem;
    margin-bottom: 0.1rem;
  }
  .section03_box img{
    width: 1.68;
    height: 0.9rem;
  }
</style>
