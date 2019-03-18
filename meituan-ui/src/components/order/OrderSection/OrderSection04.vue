<template>
  <div class="section04">
    <div class="section02">
      <h1>最近订单</h1>
    </div>
    <div class="section03-box">
      <div class="section03-box-left">
        <img class="section03-img" src="static/img/order-section03-03.png"/>
      </div>
      <div class="section03-box-right">
        <div class="section03-box-right01">
          <h2>奶茶店（西安万达店）</h2>
          <span>11422km</span>
        </div>
        <div class="section03-box-right02">
          <p>八十分钟送到</p>
        </div>
        <div class="section03-box-right03">
          <p>起送价$30|配送费</p>
          <p>月售1242件</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "OrderSection04"
    }
</script>

<style scoped>

  .section02{
    width: 100%;
    height: 0.48rem;
    background-color: #f7f8fa;
  }
  .section02 h1{
    font-size: 0.16rem;
    line-height: 0.48rem;
    text-indent: 0.15rem;
  }

  .section04{
    box-sizing: border-box;
    width: 100%;
    padding: 0 0.1rem;
  }
  /*section03-box*/
  .section03-box{
    width: 100%;
    height: 1rem;
    padding-top: 0.15rem;
    border-top: 1px solid #e5e5e5;
    display: -webkit-flex;
    -webkit-justify-content: -webkit-flex-start;
  }
  .section03-box .section03-box-left{
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 0.1rem;
  }
  .section03-box .section03-box-left img{
    width: 0.8rem;
    height: 0.8rem;
  }
  .section03-box-right{
    /*display: -webkit-flex;*/
    /*-webkit-flex-direction: column;*/
    /*width: 2.5rem;*/
  }
  .section03-box-right01{
    width:  2.2rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
  }
  .section03-box-right01 h2{
    font-size: 0.16rem;
    color:#000;
  }
  .section03-box-right01 span{
    display: block;
    height: 0.14rem;
    width: 0.24rem;
    font-size: 0.10rem;
    line-height: 0.14rem;
    border-radius: 0.01rem;
  }

  .section03-box-right02 p{
    font-size: 0.12rem;
    color: #6b6b6b;
    line-height: 0.22rem;
  }
  .section03-box-right03{
    display: -webkit-flex;
    -webkit-justify-content: space-between;
  }
  .section03-box-right03 p{
    font-size: 0.12rem;
    line-height: 0.22rem;
    color: #6b6b6b;
  }

</style>
