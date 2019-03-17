<template>
    <div class="room1">
        <router-link to="/roomintro"><img :src="data.imgs" alt=""></router-link>
        <h3>{{data.title}}</h3>
        <p class="p1">{{data.ptitle}}</p>
        <p class="p2">{{data.totitle}}<span>{{data.spans}}</span></p>
        <p class="p3">{{data.ptitle1}}</p>
    </div>
</template>
<script>
export default {
    props:["data","title"]
}
</script>
<style scoped>

</style>
