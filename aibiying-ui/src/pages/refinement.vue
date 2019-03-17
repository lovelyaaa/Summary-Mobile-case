<template>
<div class="roomPlus">
    <headers></headers>
    <div class="refinecontent">
        <a href="javascript:;">漫步苍山洱海涧</a>
        <h2>在大理，留下全家人的温暖回忆</h2>
        <p>大理，是镇西南的中心，也曾是茶马古道的重要一站。
            来这里，[住民宿]本身就是旅行中难忘的体验：窗外如画的自然
            景色、精心布置的宅院暖屋和亲切淳朴的邻舍民风……全新开通的昆明
            -大理高铁线让交通更加便捷。    
        </p>
    </div>
    <refinement-list :data="i" :key="index" v-for="(i,index) in data.plus1"></refinement-list>
</div>
</template>
<script>
import headers from "../components/refinement/headers"
import data from "../components/refinement/data/refine.json"
import refinementList from "../components/refinement/refinementList"
import Swiper from "swiper"
import "../../node_modules/swiper/dist/css/swiper.css";
import "../../node_modules/swiper/dist/js/swiper.js"
import "../assets/css/refinement.css"
export default {
    components:{
        headers,
        refinementList
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
    
</style>
