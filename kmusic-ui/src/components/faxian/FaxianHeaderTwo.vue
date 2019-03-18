<template>
    <div class="header_two" >
            <div class="swiper-container">
							<div class="swiper-wrapper">
									<div class="swiper-slide">
										<img :src="datas.bannerone" width="100%"/>
									</div>
									<div class="swiper-slide">
                    <img :src="datas.bannertwo" alt="">
                  </div>
									<div class="swiper-slide">
                    <img :src="datas.bannerthree" alt="">
                  </div>
							</div>
							<!-- 如果需要分页器 -->
							<div class="swiper-pagination"></div>

							<!-- 如果需要导航按钮 -->
							<!-- <div class="swiper-button-prev"></div> -->
							<!-- <div class="swiper-button-next"></div> -->

							<!-- 如果需要滚动条 -->
							<!-- <div class="swiper-scrollbar"></div> -->
					</div>
        </div>
</template>
<script scoped>
import Swiper from "swiper"
export default {
  name: "FaxianheaderTwo",
  props:["datas"],
  mounted(){
    new Swiper('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
  }
}
</script>
<style>
  @import "../../assets/css/swiper.min.css";
.header_two{
	width: 100%;
	height: 2.33rem;
  margin-top: .53rem;
}
.swiper-container img{
    width: 3.45rem;
    height: 1.73rem;
    margin: .16rem .16rem;
}
</style>
