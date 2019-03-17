<template>
<div class="roomPlus">
    <headers></headers>
    <room-plus-list :data="i" :key="'list1'+index" v-for="(i,index) in data.plus1"></room-plus-list>
    <room-plus-list1 :data="data.plus2"></room-plus-list1>
    <div class="roomjingxuan">
        <img src="/../static/img/plus.png" alt="">
        <h2>通过了品质和舒适度核验的精选房源</h2>
        <p>爱彼迎Plus的每个房源都必须通过现场品质检验，
            确保房源符合高标准，能够提供高舒适度、高
            品质、有格调的居住体验。
        </p>
        <a href="javascript:;">了解更多</a>
    </div>
    <room-plus-list2 :data="data.plus3"></room-plus-list2>
    <room-intro-list8 :data="i" v-for="(i,index) in data.plus4" :key="'lists'+index"></room-intro-list8>
    <room-intro-list7 :data="i" :key="'listw'+index" v-for="(i,index) in data.plus5"></room-intro-list7>
    <room-intro-list8 :data="i" v-for="(i,index) in data.plus6" :key="'listk'+index"></room-intro-list8>
    <footers></footers>
</div>
</template>
<script>
import headers from "../components/roomPlus/headers"
import footers from "../components/roomPlus/footers"
import roomPlusList from "../components/roomPlus/roomPlusList"
import roomPlusList1 from "../components/roomPlus/roomPlusList1"
import roomPlusList2 from "../components/roomPlus/roomPlusList2"
import roomIntroList7 from "../components/roomintro/roomIntroList7"
import roomIntroList8 from "../components/roomintro/roomIntroList8"
import data from "../components/roomPlus/data/plus.json"
import "../assets/css/roomPlus.css"
export default {
    components:{
        headers,
        footers,
        roomPlusList,
        roomPlusList1,
        roomPlusList2,
        roomIntroList7,
        roomIntroList8
    },
    data(){
        return {
            data
        }
    }
}
</script>
<style scoped>
    
</style>
