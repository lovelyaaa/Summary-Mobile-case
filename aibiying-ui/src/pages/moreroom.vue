<template>
    <div class="morerooms">
        <headers></headers>
        <refinement-list :data="i" :key="index" v-for="(i,index) in data1.plus2"></refinement-list>
        <div class="roomcontent">
            <h3 class="liulan">浏览全部房源</h3>
            <room-list :data="i" :title="index" :key="'list'+index" v-for="(i,index) in data2.room1"></room-list>
        </div>
        <footers></footers>
    </div>
</template>
<script>
import headers from "../components/moreroom/headers"
import footers from "../components/roomPlus/footers"
import data from "../components/moreroom/data/moreroom.json"
import data1 from "../components/refinement/data/refine.json"
import data2 from "../components/room/data/room.json"
import refinementList from "../components/refinement/refinementList"
import roomList from "../components/room/roomList"
import Swiper from "swiper"
import "../../node_modules/swiper/dist/css/swiper.css";
import "../../node_modules/swiper/dist/js/swiper.js"
import "../assets/css/moreroom.css"
export default {
    components:{
        headers,
        footers,
        refinementList,
        roomList
    },
    data(){
        return {
            data,
            data1,
            data2
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
    
</style>
