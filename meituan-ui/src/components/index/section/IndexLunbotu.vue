<template>
  <!--轮播图-->
  <div class="lunbotu">
    <div class="banner swiper-container">
      <div class="swiper-wrapper" >
        <div class="swiper-slide" v-for="imgs in datas.index.lunbotu"><img :src="imgs" alt=""/></div>
      </div>

      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

    </div>
  </div>
</template>

<script>

    import Swiper from "swiper"
    export default {
      name: "IndexLunbotu",
      props:["datas"],
      mounted(){
        new Swiper ('.swiper-container', {
          loop: true,
          autoplay:true,
          // 如果需要分页器
          pagination : {
            el : ".swiper-pagination"
          }
          // 如果需要前进后退按钮
          // nextButton: '.swiper-button-next',
          // prevButton: '.swiper-button-prev',
          // // 如果需要滚动条
          // scrollbar: '.swiper-scrollbar',
        })
        // console.log(this.datas());
      }
    }
</script>

<style>
  /*  获取外部的swiper的css样式   切记加@符号*/
  @import "swiper/dist/css/swiper.min.css";
  /* 轮播图 */
  .lunbotu{
    margin-top: 0.51rem;
    overflow:hidden;
    width: 100%;
    height: 1.06rem;
  }
  .banner{
    width: 100%;
    height: 1.06rem;
  }
  .swiper-wrapper{
    width: 100%;
  }
  .swiper-wrapper img{
    width: 100%;
  }
  .swiper-pagination-bullet{
    border: none;
    margin: -0.1rem 0 0 0;
  }
  .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{
    background-color: #0f0;
    margin: -0.1rem 0 0 0;
  }
  .menu{
    display: -webkit-flex;
  }
  .menu a{
    -webkit-flex:1;
    text-align: center;
  }
  .menu img{
    width: .53rem;
    height: .55rem;
    margin:0 auto .07rem;
  }
  .menu span{
    color: #787878;
    font-size: 0.05rem;
    display: block;
  }
</style>
