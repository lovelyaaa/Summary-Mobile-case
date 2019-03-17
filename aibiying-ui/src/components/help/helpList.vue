<template>
    <div class="tuijian">
        <h1>{{data.title}}</h1>
        <div class="tuijiancontent">
            <img v-if="data.imgs" :src="data.imgs" alt="">
            <h3>{{data.htitle}}</h3>
            <p v-for="(i,index) in data.ptitle" :key="index">{{i}}</p>
            <a href="#">浏览全部</a>
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
