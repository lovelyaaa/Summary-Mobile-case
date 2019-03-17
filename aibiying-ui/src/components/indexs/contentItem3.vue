<template>
    <div class="pro1">
        <a href="javascript:;"><img :src="data.imgs" alt=""></a>
        <div class="bao">
            <h3>{{data.title}}</h3>
            <p>{{data.ptitle}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props:["data","title"]
}
</script>
<style scoped>

</style>
