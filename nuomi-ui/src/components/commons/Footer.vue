<template>
  <footer>
    <router-link tag="a" to="/index" class="foot">
      <img src="../../../static/img/index_img/index-f1.jpg"/>
      <p>首页</p>
    </router-link>
    <router-link tag="a" to="/index" class="foot">
      <img src="../../../static/img/index_img/index-f2.jpg"/>
      <p>数据服务</p>
    </router-link>
    <router-link tag="a" to="/shoppingMall" class="foot">
      <img src="../../../static/img/index_img/index-f3.jpg"/>
      <p>服务商城</p>
    </router-link>
    <router-link tag="a" to="/businessCollege" class="foot">
      <img src="../../../static/img/index_img/index-f4.jpg"/>
      <p>商学院</p>
    </router-link>
    <router-link tag="a" to="/myWorld" class="foot">
      <img src="../../../static/img/index_img/index-f5.jpg"/>
      <p>我的</p>
    </router-link>
  </footer>
</template>

<script>
    export default {
        name: "nmFooter"
    }
</script>

<style scoped>
  @import "../../assets/commonCss/common.css";
</style>
