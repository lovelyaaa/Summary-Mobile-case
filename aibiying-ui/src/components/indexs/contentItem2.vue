<template>
    <div class="lv1">
        <router-link to="/refinement"><img :src="data.imgs" alt=""></router-link>
        <h3>{{data.title}}</h3>
        <h2>{{data.ptitle}}</h2>
        <p>{{data.totitle}}</p>
    </div>
</template>
<script>
export default {
    props:["data","title"]
}
</script>
<style scoped>

</style>
