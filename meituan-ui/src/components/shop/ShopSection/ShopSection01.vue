<template>
  <div class="section01">
    <div class="section01-01">
      <div class="section01-01-box">
        <img src="static/img/shop-03.png" alt="" />
        <p>优惠团购</p>
      </div>
      <div class="section01-01-box">
        <img src="static/img/shop-04.png" alt="" />
        <p>优惠团购</p>
      </div>
      <div class="section01-01-box">
        <img src="static/img/shop-05.png" alt="" />
        <p>优惠团购</p>
      </div>
      <div class="section01-01-box">
        <img src="static/img/shop-06.png" alt="" />
        <p>优惠团购</p>
      </div>
      <div class="section01-01-box">
        <img src="static/img/shop-07.png" alt="" />
        <p>优惠团购</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ShopSection01"
    }
</script>

<style scoped>
  .section01{
    background-color: #FFFFFF;
  }
  .section01-01{
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 0.1rem;
    margin-top: 0.1rem;
  }
  .section01-01-box img{
    width:.45rem;
    height: 0.45rem;
  }
  .section01-01-box p{
    font-size: 0.11rem;
    margin-top: 0.06rem;
    margin-bottom: 0.05rem;
  }
</style>
