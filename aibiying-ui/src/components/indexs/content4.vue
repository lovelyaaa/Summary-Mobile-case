<template>
    <div class="box-con1">
        <div class="title">
            <h2>全球热门房源精选</h2>
            <p>精选舒适房源供你挑选</p>
        </div>
        <div class="room">
            <content-item1 :data="i" :title="index" :key="index" v-for="(i,index) in data.rooms4"></content-item1>
            <router-link tag="input" type="button" value="查看更多房源" id="show" to="/moreroom"></router-link>
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
            data
        }
    }
}
</script>
<style scoped>

</style>
