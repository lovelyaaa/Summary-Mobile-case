<template>
    <div class="box-con1">
        <div class="title">
            <h2>诚意推出爱彼迎Plus</h2>
            <p>品质和舒适性都经过验证的房源</p>
        </div>
        <content-item5 :data="i" :title="index" :key="index" v-for="(i,index) in data.rooms5"></content-item5>
        <router-link tag="input" type="button" value="查看更多房源" id="show" to="/moreroom" class="cha"></router-link>
    </div>      
</template>
<script>
import data from "./data/room.json"
import contentItem5 from "./contentItem5"
export default {
    components:{
        contentItem5
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
