<template>
    <div class="cheng">
        <router-link to="/roomplus">
            <img :src="data.imgs" alt="">
            <div class="plus">
                <p class="p5">{{data.title}}</p>
                <p class="p6">{{data.ptitle}}</p>
            </div>
            <h3>{{data.totitle}}</h3>
            <p>{{data.ptitle1}}</p>
        </router-link>
    </div>
</template>
<script>
export default {
    props:["data","title"]
}
</script>
<style scoped>

</style>
