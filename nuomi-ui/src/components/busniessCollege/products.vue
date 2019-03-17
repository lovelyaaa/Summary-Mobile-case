<template>
  <div class="products">
    <videoTop></videoTop>
    <proList v-for="(i,index) in data.proList" :key="index" :data="i"></proList>

  </div>
</template>

<script>
  import videoTop from "./videoTop"
  import proList from "./proList"
    export default {
        name: "products",
      props:["data"],
      components:{
        videoTop,
        proList
      }
    }
</script>

<style scoped>
  @import "../../assets/scss/businessCollege.css";
</style>
