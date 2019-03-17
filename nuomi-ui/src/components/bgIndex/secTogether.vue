<template>
  <div class="together">
    <toSec :data="data.togetherSec[0]"></toSec>
    <toList v-for="(i,index) in data.list" :key="index" :data="i,index"></toList>
    <toftop :data="data.ftop[0]"></toftop>
  </div>
</template>

<script>
  import toSec from "./toSec"
  import toList from "./toList"
  import toftop from "./toftop"
    export default {
        name: "secTogether",
        props:["data"],
        components:{
          toSec,
          toList,
          toftop
        }
    }
</script>

<style scoped>
  @import "../../assets/scss/index.css";
</style>
