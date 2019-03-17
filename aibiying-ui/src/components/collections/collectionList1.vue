<template>
    <div class="collectionsitem">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" :key="inx" v-for="(imgs,inx) in data.imgs">
                    <img :src="imgs">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="collectiontitle">
            <h1>{{data.htitle}}</h1>
            <div class="logoimg">
                <img src="/static/img/aibiying.png" alt="" class="logo">
                <span>{{data.spans}}</span>
            </div>
            <p>{{data.ptitle}}<a href="#">查看更多</a></p>
            <img src="/static/img/zan1.png" alt="" class="zan">
            <h4>{{data.num}}人已赞</h4>
        </div>
    </div>
</template>

<script>
export default {
    props:["data"]
}
</script>

<style>

</style>
