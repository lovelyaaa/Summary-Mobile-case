<template>
    <div class="box-con1">
        <div class="title">
            <h2>精选旅行故事</h2>
        </div>
        <div class="room lvxing">
            <content-item6 :data="i" :title="index" :key="index" v-for="(i,index) in data.rooms6"></content-item6>
            <router-link tag="input" type="button" value="查看更多房源" id="show" to="/moreroom"></router-link>
        </div>
    </div>      
</template>
<script>
import data from "./data/room.json"
import contentItem6 from "./contentItem6"
export default {
    components:{
        contentItem6
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
