<template>
  <div class="header-nav">
    <a>全部</a>
    <a>待付款</a>
    <a>待使用</a>
    <a>待评价</a>
    <a>退款/售后</a>
  </div>
</template>

<script>
    export default {
        name: "MyOrderNav"
    }
</script>

<style scoped>
  .header-nav{
    margin-top: 0.43rem;
    margin-bottom: 0.1rem;
    background-color: #ffffff;
    border-bottom: 1px solid #eeeeee;
    display: flex;
    justify-content: space-around;
  }
  .header-nav a{
    font-size: 0.14rem ;
    line-height: 0.4rem;
  }
</style>
