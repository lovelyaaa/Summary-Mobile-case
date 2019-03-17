<template>
    <div class="content">
        <div class="swiper-container ll">
            <div class="swiper-wrapper lw">
                <div class="swiper-slide ls" :key="inx" v-for="(imgs,inx) in data.imgs">
                    <img :src="imgs">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="room-swip">
            <a href="#">{{data.title}}</a>
            <h3>{{data.htitle}}</h3>
            <p>{{data.ptitle}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props:["data"],
    data(){
        return {
            
        }
    }
}
</script>
<style scoped>

</style>
