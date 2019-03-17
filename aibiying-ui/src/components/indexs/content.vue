<template>
    <div class="box-con1">
        <div class="title">
            <h2>人气目的地推荐</h2>
            <p>来这里寻找春日渐暖的预兆</p>
        </div>
        <div class="box-con1-content">
            <content-item :data="i" :title="index" :key="index" v-for="(i,index) in data.room"></content-item>
        </div>
    </div>
</template>
<script>
import data from "./data/room.json"
import contentItem from "./contentItem"
export default {
    components:{
        contentItem
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
