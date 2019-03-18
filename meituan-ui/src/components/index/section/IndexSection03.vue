<template>
  <div class="section03">
    <div class="section03-title">
      <h2>{{indexSection03.section03Title}}</h2>
    </div>

    <div class="section03-box" v-for="(i,index) in indexSection03.section03Box">
      <div class="section03-box-left">
        <img class="section03-img" :src="i.section03Img"/>
      </div>
      <div class="section03-box-right">
        <div class="section03-box-right01">
          <h2>{{i.section03ShopName}}</h2>
          <span>{{i.section03ShopType}}</span>
        </div>
        <div class="section03-box-right02">
          <p>{{i.section03Time}}</p>
        </div>
        <div class="section03-box-right03">
          <p>{{i.section03Money}}</p>
          <p>{{i.section03Count}}</p>
        </div>
        <div class="section03-box-right04">
          <span>{{i.section03new}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "IndexSection03",
      props:["indexSection03"]
    }
</script>

<style scoped>
  .section03{
    overflow: hidden;
    box-sizing: border-box;
    padding: 0 0.12rem;
    background-color: #fff;
    width: 100%;
    margin-bottom: .5rem;
  }
  .section03-title{
    width: .9rem;
    height: 0.12rem;
    background-image: url(/static/img/section03-bd.png);
    background-size: 1px 1px;
    background-repeat: repeat-x;
    background-position: left center;
    margin: 0.15rem auto ;
  }
  .section03-title h2{
    width: 0.5rem;
    font-size: 0.12rem;
    line-height: 0.12rem;
    text-align: center;
    margin: 0 auto;
    padding: 0 0.08rem;
    background-color: #fff;
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
    width: 2.5rem;
  }
  .section03-box-right01{
    width: 100%;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
  }
  .section03-box-right01 h2{
    font-size: 0.14rem;
    color:#000;
  }
  .section03-box-right01 span{
    display: block;
    height: 0.14rem;
    width: 1.2rem;
    text-align: right;
    padding-right: 0.1rem;
    font-size: 0.10rem;
    line-height: 0.14rem;
    /*background-color: #f7d373;*/
    border-radius: 0.01rem;
  }

  .section03-box-right02 p{
    font-size: 0.11rem;
    color: #6b6b6b;
    line-height: 0.22rem;
  }
  .section03-box-right03{
    display: -webkit-flex;
    -webkit-justify-content: space-between;
  }
  .section03-box-right03 p{
    font-size: 0.11rem;
    line-height: 0.22rem;
    color: #6b6b6b;
  }
  .section03-box-right04{
    width: 60%;
  }
  .section03-box-right04 span{
    display: block;
    font-size: 0.11rem;
    line-height: 0.18rem;
    color: #e85b4d;
    border:1px solid #e85b4d;
    text-indent: 0.10rem;
    border-radius: 0.02rem;
  }


</style>
