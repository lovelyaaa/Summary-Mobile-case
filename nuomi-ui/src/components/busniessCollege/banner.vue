<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="i in data.banner"  class="swiper-slide"><img :src="i.bannerImg"/></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <!--<div class="swiper-button-prev"></div>-->
      <!--<div class="swiper-button-next"></div>-->
      <!-- 如果需要滚动条 -->
      <!--<div class="swiper-scrollbar"></div>-->
    </div>
  </div>

</template>
<script>
  import 'swiper/dist/css/swiper.css'
  import Swiper from 'swiper';
  export default {
    name: "banner",
    props:["data"],
    mounted(){
      new Swiper ('.swiper-container', {
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        //设置自动切换时间
        autoplay: {
          delay: 4000,//4秒切换一次
        },
        // 如果需要滚动条
        scrollbar: '.swiper-scrollbar',
      })
    }
  }
</script>

<style scoped>
  .swiper-container {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .swiper-wrapper {
    height: 200px;
  }

  .swiper-slide img {
    max-width: 100%;
  }

  .swiper-slide {
    text-align: center;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>
