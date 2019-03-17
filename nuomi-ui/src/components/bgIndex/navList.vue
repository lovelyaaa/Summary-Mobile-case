<template>
  <div class="nav">
      <img class="navImg" :src="data.lisImg">
      <p class="navTxt">{{data.lisTxt}}</p>
  </div>
</template>

<script>
    export default {
        name: "navList",
        props: ["data"]
    }
</script>

<style scoped>
  @import "../../assets/scss/index.css";
</style>
