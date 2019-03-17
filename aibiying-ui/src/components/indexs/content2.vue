<template>
    <div class="box-con1">
        <div class="title">
            <h2>新年旅行灵感集</h2>
        </div>
        <div class="qinzi">
            <content-item2 :data="i" :title="index" :key="index" v-for="(i,index) in data.rooms2"></content-item2>
        </div>
    </div>      
</template>
<script>
import data from "./data/room.json"
import contentItem2 from "./contentItem2"
export default {
    components:{
        contentItem2
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
