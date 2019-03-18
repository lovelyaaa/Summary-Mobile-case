<template>
  <div class="section01">
    <div class="section01-01">
      <img src="static/img/myself-05.png"/>
      <p>收藏</p>
    </div>
    <div class="section01-01">
      <img src="static/img/myself-06.png"/>
      <p>评价</p>
    </div>
    <div class="section01-01">
      <img src="static/img/myself-07.png"/>
      <p>最近浏览</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MyselfSection01"
    }
</script>

<style scoped>
  .section01{
    background-color: #FFFFFF;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #e5e5e5;
  }
  .section01-01 img{
    width: 0.26rem;
    height: 0.26rem;
    margin: 0.16rem auto 0.12rem;
  }
  .section01-01 p{
    font-size: 0.12rem;
    text-align: center;
    margin-bottom: 0.2rem;
  }
</style>
