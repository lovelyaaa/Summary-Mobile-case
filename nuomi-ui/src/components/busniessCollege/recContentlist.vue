<template>
  <div class="recContentlist">
    <img :src="data.recontentImg" />
    <p>{{data.recontentDesc}}</p>
  </div>
</template>

<script>
    export default {
        name: "recContentlist",
        props:["data"]
    }
</script>

<style scoped>
  @import "../../assets/scss/businessCollege.css";
</style>
