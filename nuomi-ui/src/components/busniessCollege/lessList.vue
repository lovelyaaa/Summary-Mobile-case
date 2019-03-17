<template>
  <div class="lessList">
    <products v-for="(i,index) in data.products" :key="index" :data="i"></products>
  </div>
</template>

<script>
  import products from "./products"
    export default {
      name: "lessList",
      props:["data"],
      components:{
          products
      }
    }
</script>

<style scoped>
  @import "../../assets/scss/businessCollege.css";
</style>
