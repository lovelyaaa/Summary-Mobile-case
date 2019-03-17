<template>
    <div class="room1">
        <a href="#"><img :src="data.imgs" alt=""></a>
        <h3>{{data.title}} <span> {{data.ptitle}}</span></h3>
        <p class="p1"><img src="../../assets/img/zan.png" alt="">{{data.totitle}} <img src="../../assets/img/ping.png" alt=""> {{data.ptitle1}}</p>
    </div>
</template>
<script>
export default {
    props:["data","title"]
}
</script>
<style scoped>

</style>
