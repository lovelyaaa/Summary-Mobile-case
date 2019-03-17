<template>
    <div class="huang">
        <ul class="uls">
            <li v-for="(imgs,index) in data" :key="index"><a href="#"><img :src="imgs.imgs" alt="">{{imgs.title}}</a></li>
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
