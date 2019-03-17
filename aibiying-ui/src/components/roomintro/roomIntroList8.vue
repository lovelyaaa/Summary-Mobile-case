<template>
    <div class="weizhi">
        <h2>{{data.tit}}</h2>
        <div class="weizhicon" :key="ik" v-for="(i,ik) in data.room">
            <h3>{{i.title}}</h3>
            <p>{{i.ptitle}}</p>
            <a href="#">{{i.atitle}}</a>
        </div>
    </div>
</template>
<script>
export default {
    props:["data"]
}
</script>
<style scoped>

</style>
