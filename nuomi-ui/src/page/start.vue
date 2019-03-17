<template>
    <div>
      <section>
        <div class="banner">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="../../static/img/start_img/banner01.jpg" /></div>
              <div class="swiper-slide"><img src="../../static/img/start_img/banner02.jpg" /></div>
              <div class="swiper-slide"><img src="../../static/img/start_img/banner03.jpg" /></div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要导航按钮 -->
            <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->

            <!-- 如果需要滚动条 -->
            <!--<div class="swiper-scrollbar"></div>-->
          </div>
        </div>
      </section>
      <footer>
        <router-link tag="a" to="/login">登录</router-link>
        <router-link tag="a" to="/Register">注册</router-link>
      </footer>
    </div>
</template>

<!--<script src="../assets/swiper/swiper.min.js"></script>-->
<!--<script>-->
  <!--window.onload = function(){-->

    <!--var mySwiper = new Swiper ('.swiper-container', {-->
      <!--direction: 'horizontal', // 垂直切换选项-->
      <!--loop: true, // 循环模式选项-->

      <!--// 如果需要分页器-->
      <!--pagination: {-->
        <!--el: '.swiper-pagination',-->
      <!--},-->
      <!--//设置自动切换时间-->
      <!--autoplay: {-->
        <!--delay: 3000,//3秒切换一次-->
      <!--}-->
    <!--})-->
  <!--}-->
<!--</script>-->

<script>
    export default {
        name: "start"
    }
</script>

<style scoped>
  @import "../assets/swiper/swiper.min.css";
  @import "../assets/scss/start.css";
</style>
