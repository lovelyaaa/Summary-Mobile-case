<template>
    <div class="box-container">
        <headers></headers>
        <div class="box">
            <contents></contents>
            <contents1></contents1>
            <contents2></contents2>
            <div class="libao">
                <p class="p3">全球500万民宿</p>
                <p class="p4">任你挑</p>
                <input type="button" value="领取千元礼包">
            </div>
            <contents3></contents3>
            <contents4></contents4>
            <contents5></contents5>
            <contents6></contents6>
            <footers></footers>
        </div>
    </div>
</template>
<script>
import headers from "../components/indexs/headers"
import contents from "../components/indexs/content"
import contents1 from "../components/indexs/content1"
import contents2 from "../components/indexs/content2"
import contents3 from "../components/indexs/content3"
import contents4 from "../components/indexs/content4"
import contents5 from "../components/indexs/content5"
import contents6 from "../components/indexs/content6"
import footers from "../components/indexs/footers"
import Swiper from "swiper"
import "../../node_modules/swiper/dist/css/swiper.css";
import "../../node_modules/swiper/dist/js/swiper.js"
import $ from "jquery"
import "../assets/css/index.css";
export default {
    components:{
        headers,
        contents,
        contents1,
        contents2,
        contents3,
        contents4,
        contents5,
        contents6,
        footers
    },
    mounted(){
        var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay:{
                delay:2000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination'
            }
        })
    },
    methods:{
        
    }
}
</script>
<style scoped>
    .box-container{
        width: 100%;
        height: 100%;
    }
</style>
