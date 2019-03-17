<template>
    <div class="boxs">
        <headers></headers>
        <div class="contents">
            <room-list :data="i" :title="index" :key="index" v-for="(i,index) in data.room"></room-list>
        </div>
        <footers></footers>
    </div>
</template>
<script>
import "../assets/css/room.css";
import headers from "../components/room/headers"
import footers from "../components/room/footers"
import roomList from "../components/room/roomList"
import Swiper from "swiper"
import "../../node_modules/swiper/dist/css/swiper.css";
import "../../node_modules/swiper/dist/js/swiper.js"
import "../../node_modules/jquery/dist/jquery.js"
import data from "../components/room/data/room.json"
export default {
    components:{
        headers,
        footers,
        roomList
    },
    data(){
        return {
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
<style scoped>  
    .contents{
        flex:1;
        overflow-y:scroll;
        overflow-x:hidden;
    }
</style>



