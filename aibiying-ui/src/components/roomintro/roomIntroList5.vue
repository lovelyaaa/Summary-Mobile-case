<template>
     <div class="huang roomdetail">
        <div class="detail-con" :key="index" v-for="(i,index) in data">
            <h3>{{i.title}}</h3>
            <p>{{i.ptitle}}</p>
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
