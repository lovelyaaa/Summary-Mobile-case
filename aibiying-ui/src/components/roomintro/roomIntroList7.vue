<template>
    <div class="huang pingjia">
        <div class="pingtop">
            <img :src="data.imgs" alt="">
            <div class="pingper">
                <h3>{{data.title}}</h3>
                <p>{{data.ptitle}}</p>
            </div>
        </div>
        <div class="pingcon">
            <p>{{data.ptitle1}}</p>
        </div>
        <div class="fangdonghui">
            <img :src="data.imgs1" alt="">
            <div class="fangdongtit">
                <h3>{{data.title1}}</h3>
                <p>{{data.ptitle2}}</p>
            </div>
        </div>
        <div class="date">{{data.dtitle}}</div>
    </div>
</template>
<script>
export default {
    props:["data"]
}
</script>
<style scoped>

</style>
