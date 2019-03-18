<template>
  <div class="section03-bottom">
    <img src="static/img/order-section03-02.png"/>
    <div class="section03-bottom01">
      <h2>众家灯火煎饼庒（普蜂莲花庄）</h2>
      <p>下单时间：2019-2-28</p>
      <b>总价：$23元</b>
      <!--<a>再来一单</a>-->
    </div>
    <div class="section03-bottom02">
      <span>已完成</span>
      <a>在来一单</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MyOrderSection01"
    }
</script>

<style scoped>

  /*section03-bottom*/
  .section03-bottom{
    box-sizing: border-box;
    width: 100%;
    padding: 0.2rem 0.12rem;
    display: flex;
    border-bottom: 1px solid #e5e5e5;
    /*background-color: #007AFF;*/
  }
  .section03-bottom img{
    width: 0.5rem;
    height: 0.5rem;
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
  .section03-bottom02{
    width: 0.68rem;
    display: flex;
    flex-direction: column;
  }
  .section03-bottom02 span{
    font-size: 0.12rem;
    color: #57beae;
    line-height: 0.3rem;
  }
  .section03-bottom02 a{
    font-size: 0.12rem;
    color: #f19e38;
    line-height: 0.23rem;
    border: 1px solid #f19e38;
    border-radius: 0.02rem;
    margin-top: 0.25rem;
    text-align: center;
    /*padding: 0 0.04rem;*/
  }
</style>
