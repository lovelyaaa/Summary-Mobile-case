<template>
    <div class="boxcs">
        <headers></headers>
        <div class="content">
            <a href="#" class="room1"><img src="/../static/img/room.jpg" alt=""></a>
            <nav>
                <span class="xiang">详情 ·</span>
                <span>评价 ·</span>
                <span>可定日期 ·</span>
                <span>位置 ·</span>
                <span>须知 ·</span>
                <span>房东</span>
            </nav>
            <room-intro-list :data="i" :title="index" :key="'list-'+index" v-for="(i,index) in data.room"></room-intro-list>
            <room-intro-list2 :data="i" :title="index" :key="'list2-'+index" v-for="(i,index) in data.room2"></room-intro-list2>
            <room-intro-list3 :data="data.room3"></room-intro-list3>
            <room-intro-list4 :data="i" :key="'list4-'+index" v-for="(i,index) in data.room4"></room-intro-list4>
            <room-intro-list1 :data="i" :key="'list1-'+index" v-for="(i,index) in data.room5"></room-intro-list1>
            <room-intro-list5 :data="data.room6"></room-intro-list5>
            <room-intro-list6 :data="data.room7" ></room-intro-list6>
            <room-intro-list7 :data="i" :key="'list7-'+index" v-for="(i,index) in data.room8"></room-intro-list7>
            <room-intro-list7 :data="i" :key="'list8-'+index" v-for="(i,index) in data.room9"></room-intro-list7>
            <room-intro-list7 :data="i" :key="'list9-'+index" v-for="(i,index) in data.room10"></room-intro-list7>
            <room-intro-list7 :data="i" :key="'list10-'+index" v-for="(i,index) in data.room11"></room-intro-list7>
            <room-intro-list8  :data="i" v-for="(i,index) in data.room12" :key="'listk'+index" ></room-intro-list8>
        </div>
        <footers></footers>
    </div>
</template>
<script>
import "../assets/css/roomintro.css";
import headers from "../components/roomintro/headers"
import footers from "../components/roomintro/footers"
import roomIntroList from "../components/roomintro/roomIntroList"
import roomIntroList1 from "../components/roomintro/roomIntroList1"
import roomIntroList2 from "../components/roomintro/roomIntroList2"
import roomIntroList3 from "../components/roomintro/roomIntroList3"
import roomIntroList4 from "../components/roomintro/roomIntroList4"
import roomIntroList5 from "../components/roomintro/roomIntroList5"
import roomIntroList6 from "../components/roomintro/roomIntroList6"
import roomIntroList7 from "../components/roomintro/roomIntroList7"
import roomIntroList8 from "../components/roomintro/roomIntroList8"
import "../../node_modules/jquery/dist/jquery.js"
import data from "../components/roomintro/data/room.json"
export default {
    components:{
        headers,
        footers,
        roomIntroList,
        roomIntroList1,
        roomIntroList2,
        roomIntroList3,
        roomIntroList4,
        roomIntroList5,
        roomIntroList6,
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
    .contents{
        flex:1;
        overflow-y:scroll;
        overflow-x:hidden;
    }
</style>



