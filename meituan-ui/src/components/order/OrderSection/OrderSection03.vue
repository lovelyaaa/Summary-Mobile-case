<template>
  <div class="section03">
    <div class="section03-top">
      <div class="section03-top01">
        <img src="static/img/order-section03-01.png"/>
        <span>美团外卖</span>
      </div>
      <p>已完成</p>
    </div>
    <div class="section03-bottom">
      <img src="static/img/order-section03-02.png"/>
      <div class="section03-bottom01">
        <h2>众家灯火煎饼庒（普蜂莲花庄）</h2>
        <p>下单时间：2019-2-28</p>
        <b>总价：$23元</b>
        <a>再来一单</a>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "OrderSection03"
    }
</script>

<style scoped>
  .section03{
    box-sizing: border-box;
    width: 3.45rem;
    height: 2.2rem;
    background-color: #FFFFFF;
    padding: 0 0.14rem;
    margin: 0 0.14rem;
    border-radius: 0.1rem;
    border: 1px solid #eeeeee;
    box-shadow: 0 .2rem 0.2rem -0.1rem #fdf1cb;
    margin-bottom: 0.35rem;
  }
  /*section03-top*/
  .section03-top{
    width: 100%;
    border-bottom: 1px solid #eeeeee;
    display: flex;
    justify-content: space-between;
    margin-bottom: .13rem;
  }
  .section03-top01{
    height: 0.53rem;
    width: 60%;
    display: flex;
  }
  .section03-top .section03-top01 img{
    width: 0.21rem;
    height: 0.21rem;
    margin-top: 0.16rem;
    margin-right: 0.1rem;
  }
  .section03-top .section03-top01 span{
    font-size: 0.13rem;
    color: #333333;
    line-height: 0.53rem;
  }
  .section03-top p{
    font-size: .13rem;
    line-height: 0.53rem;
  }
  /*section03-bottom*/
  .section03-bottom{
    width: 100%;
    display: flex;

  }
  .section03-bottom img{
    width: 0.32rem;
    height: 0.32rem;
    margin-right: 0.12rem;
  }
  .section03-bottom01 {
    width:2.8rem;
    display: flex;
    flex-direction: column;
  }
  .section03-bottom01 h2{
    font-size: .15rem;
    line-height: .3rem;
  }
  .section03-bottom01 p{
    font-size: .14rem;
    line-height: .25rem;
    color: #555555;
  }
  .section03-bottom01 b{
    font-size: .14rem;
    font-weight: 100;
    line-height: .25rem;
    color: #555555;
  }
  .section03-bottom01 a{
    display: block;
    width: 0.94rem;
    height: 0.34rem;
    font-size: .14rem;
    line-height: 0.34rem;
    border: 1px solid #555555;
    text-align: center;
    border-radius: 0.34rem;
    align-self: flex-end;
  }
  .section03-title{
    font-size: .13rem;
    color: #6a71a0;
    text-align: center;
    line-height: 0.45rem;
  }

</style>
