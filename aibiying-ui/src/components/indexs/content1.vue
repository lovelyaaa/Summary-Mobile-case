<template>
    <div class="box-con1">
        <div class="title">
            <h2>新年特惠房源</h2>
            <p>低至八折可与红包叠加使用</p>
        </div>
        <ul class="uls">
            <li :class="{on:index==num}" @click="tab(index)" v-for="(item,index) in data1" :key="index"><a href="javascript:;">{{item}}</a></li>
        </ul>
        <div class="room" v-for="(itemCon,i) in data.rooms7" :key="i" v-show="i==num">
            <content-item1 :data="i" :title="index" :key="index" v-for="(i,index) in itemCon.rooms1"></content-item1>
            <router-link tag="input" type="button" value="显示更多上海的房源" id="show" to="/moreroom"></router-link>
        </div>
    </div>      
</template>
<script>
import data from "./data/room.json"
import contentItem1 from "./contentItem1"
export default {
    components:{
        contentItem1
    },
    data(){
        return {
            data,
            data1:["上海","杭州","重庆","丽江","大理","武汉","北京","广州"],
            num:0
        }
    },
    methods:{
        tab(index){
            this.num=index;
        }
    }
}
</script>
<style scoped>

</style>
