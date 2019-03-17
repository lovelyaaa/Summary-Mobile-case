<template>
    <div class="box-con1">
        <div class="title">
            <h2>全方位安全保障</h2>
        </div>
        <div class="protect">
            <content-item3 :data="i" :title="index" :key="index" v-for="(i,index) in data.rooms3"></content-item3>
        </div>
    </div>      
</template>
<script>
import data from "./data/room.json"
import contentItem3 from "./contentItem3"
export default {
    components:{
        contentItem3
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
