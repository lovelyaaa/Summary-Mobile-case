<template>
    <div class="refinementContent">
        <a href="#" class="ik" v-if="data.imgs" ><img :src="data.imgs" alt="" class="imgs">
            <h2 v-if="data.htitle">{{data.htitle}}</h2>
            <p v-if="data.ptitle">{{data.ptitle}}</p>
        </a>
        <ul class="refinementul">
            <li v-for="(i,index) in data.room" :key="index">
                <div class="swiper-container ll">
                    <div class="swiper-wrapper lw">
                        <div class="swiper-slide ls" :key="inx" v-for="(imgs,inx) in i.imgk">
                            <img :src="imgs">
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                <p class="title">{{i.title}}</p>
                <h3>{{i.ptit}}</h3>
                <p class="spans"><span>{{i.spans}}</span></p>
            </li>
        </ul>
        <input type="button" value="查看更多房源">
    </div>
</template>
<script>
export default {
    props:["data"]
}
</script>
<style>

</style>
