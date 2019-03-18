<template>
  <div class="section02">
    <h1>美团钱包</h1>
    <div class="section02-01">
      <div class="section02-01-box">
        <img src="static/img/myself-08.png"/>
        <p>我的钱包</p>
      </div>
      <div class="section02-01-box">
        <img src="static/img/myself-08.png"/>
        <p>红包/卡卷</p>
      </div>
      <div class="section02-01-box">
        <img src="static/img/myself-09.png"/>
        <p>闪付</p>
      </div>
      <div class="section02-01-box">
        <img src="static/img/myself-10.png"/>
        <p>理财</p>
      </div>
      <div class="section02-01-box">
        <img src="static/img/myself-11.png"/>
        <p>手机充值</p>
      </div>
      <div class="section02-01-box">
        <img src="static/img/myself-11.png"/>
        <p>手机充值</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MyselfSection02"
    }
</script>

<style scoped>
  .section02{
    display: flex;
    flex-direction: column;
  }
  .section02>h1{
    font-size: 0.12rem;
    line-height: 0.43rem;
  }
  .section02-01{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    overflow: hidden;
  }
  .section02-01-box{
    margin:0 0.16rem 0.2rem;
  }
  .section02-01-box img{
    width: 0.45rem;
    height: 0.4rem;
    margin: 0 auto;
  }
  .section02-01-box p{
    font-size: 0.12rem;
    text-align: center;
  }

</style>
