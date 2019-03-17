<template>
    <div class="ss">
        <router-link tag="img" :src="data.imgs" alt="" to="/room"></router-link>
        <div class="de">
            <h3>{{data.title}}</h3>
            <p>{{data.price}}</p>
            <span>{{data.toPrice}}</span>
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
