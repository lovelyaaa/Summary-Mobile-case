<template>
    <div class="collect">
        <div class="collectbg"><div class="zhezhaobg"></div> </div>
        <div class="collectbody">
            <collection-list></collection-list>
            <collection-list1 :data="i" v-for="(i,index) in data.plus1" :key="index"></collection-list1>
            <div class="box">
                <content6></content6>
            </div>
        </div> 
    </div>
</template>
<script>
import data from "../components/collections/data/collection.json"
import collectionList from "../components/collections/collectionList"
import collectionList1 from "../components/collections/collectionList1"
import content6 from "../components/indexs/content6"
import Swiper from "swiper"
import "../../node_modules/swiper/dist/css/swiper.css";
import "../../node_modules/swiper/dist/js/swiper.js"
export default {
    components:{
        collectionList,
        collectionList1,
        content6
    },
    data(){
        return{
            data
        }
    },
    mounted(){
        var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            pagination: {
                el: '.swiper-pagination'
            }
        })
    }
}
</script>
<style>
@import "../assets/css/collections.css"
</style>
