<template>
    <div class="huang extra">
        <ul>
            <li :key="index" v-for="(i,index) in data"><a href="#"><img :src="i.imgs" alt=""><span>{{i.title}}</span></a></li>
        </ul>
    </div>
</template>
<script>
export default {
    props:["data"]
}
</script>
<style scoped>

</style>
