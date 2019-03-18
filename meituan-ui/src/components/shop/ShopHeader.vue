<template>
  <header>
    <div class="header-left">
      <img src="static/img/myOrder-01.png"/>
    </div>
    <div class="header-cen">
      <img src="static/img/shop-00.png"/>
      <span>胡桃里音乐酒馆</span>
    </div>
    <div class="header-right">
      <img src="static/img/shop-01.png"/>
    </div>
  </header>
</template>

<script>
    export default {
        name: "ShopHeader"
    }
</script>

<style scoped>
  /*header*/
  header{
    z-index: 99;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.4rem;
    padding-top: 0.12rem;
    background-color: #ffffff;
    display: -webkit-flex;
    -webkit-justify-content: space-around;
  }
  .header-left{
    display: -webkit-flex;
    padding-top: 0.06rem;
  }
  .header-left span{
    font-size: 0.14rem;
    color: #999999;
    white-space: nowrap;
  }
  .header-left img{
    width: .15rem;
    height: .2rem;
  }
  .header-cen{
    width: 2.5rem;
    height: 0.38rem;
    background-color: #f5f5f5;
    display: -webkit-flex;
    -webkit-justify-content: -webkit-flex-start;
    border-radius: 0.1rem;
    text-align: center;
  }
  .header-cen img{
    width: .12rem;
    height: .12rem;
    margin: 0.14rem 0.12rem;
  }
  .header-cen span{
    color: #999999;
    font-size: 0.14rem;
    line-height: 0.38rem;
  }
  .header-right img{
    width: .26rem;
    height: .26rem;
  }
</style>
