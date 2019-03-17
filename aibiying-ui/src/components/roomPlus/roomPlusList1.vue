<template>
    <div class="roompluscontent canguan">
        <div class="canguantitle">
            <h2>参观这个住宿加早餐酒店</h2>
        </div>
        <div class="canguancontent" v-for="(content,i) in data.content" :key="i">
            <img :src="imgs" alt="" v-for="(imgs,index) in content.imgs" :key="index">
            <h3>{{content.title}}<span>{{content.spans}}</span></h3>
        </div>
        <a href="javascript:;" class="liulan">浏览所有照片，共14张</a>
    </div>
</template>
<script>
export default {
    props:["data"]
}
</script>
<style>

</style>
