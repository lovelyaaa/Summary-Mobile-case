<template>
  <div class="section04">
    <a>全部美食<img src="/static/img/myOrder-02.png" alt="" /></a>
    <a>附近<img src="/static/img/myOrder-02.png" alt="" /></a>
    <a>智能排序<img src="/static/img/myOrder-02.png" alt="" /></a>
    <a>筛选<img src="/static/img/myOrder-02.png" alt="" /></a>
  </div>
</template>

<script>
    export default {
        name: "ShopSection04"
    }
</script>

<style scoped>
  .section04{
    display: flex;
    justify-content: space-between;
  }
  .section04 a{
    font-size: 0.13rem;
    line-height: 0.4rem;
  }
  .section04 a img{
    width: 0.12rem;
    height: 0.15rem;
    display: inline-block;
    vertical-align: middle;
  }
</style>
