<template>
    <div class="huang fang">
        <img src="/../static/img/fangdong.jpg" alt="" class="fangdong">
        <div class="fangdecs">
            <h3>{{data.title}}</h3>
            <p>{{data.ptitle}}</p>
        </div>
        <img src="/../static/img/infos.jpg" alt="" class="infos">
    </div>
</template>
<script>
export default {
    props:["data"]
}
</script>
<style scoped>

</style>
