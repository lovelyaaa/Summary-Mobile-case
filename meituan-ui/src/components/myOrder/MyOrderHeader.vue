<template>
  <header>
    <img src="img/myOrder-01.png"/>
    <h1>我的订单<img src="img/myOrder-02.png"/></h1>
  </header>
</template>

<script>
    export default {
        name: "MyOrderHeader"
    }
</script>

<style scoped>

  /*header*/
  header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.43rem;
    background-color: #fbfbfd;
    display: flex;
    border-bottom: 1px solid #adadad;
  }
  header h1{
    font-size: 0.16rem;
    line-height: 0.43rem;
    margin-left: 1rem;
  }
  header>img{
    width: 0.15rem;
    height: 0.2rem;
    margin: 0.12rem 0.18rem 0;

  }
  header h1 img{
    width: 0.12rem;
    height: 0.15rem;
    display: inline-block;
  }


</style>
