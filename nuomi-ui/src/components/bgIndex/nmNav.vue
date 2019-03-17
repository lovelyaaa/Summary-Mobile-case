<template>
  <nav>
    <navList v-for="(i,index) in data.indexNavList" :key="index" :data="i,index"></navList>
  </nav>
</template>

<script>
  import navList from "./navList"
    export default {
        name: "nmNav",
        components:{
          navList
        },
      props:["data"]
    }
</script>

<style scoped>
  /*@import "../../assets/scss/index.css";*/
</style>
