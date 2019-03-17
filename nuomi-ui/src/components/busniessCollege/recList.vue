<template>
  <div class="recList">
    <recContentlist v-for="(i,index) in data" :key="index" :data="i"></recContentlist>
  </div>
</template>

<script>
  import recContentlist from "./recContentlist"
    export default {
        name: "recList",
      props:["data"],
      components:{
        recContentlist
      }
    }
</script>

<style scoped>
  .recList{
    height: 3.6rem;
    display: flex;
    padding-top: .12rem;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
