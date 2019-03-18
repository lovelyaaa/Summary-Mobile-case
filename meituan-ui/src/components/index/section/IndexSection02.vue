<template>
  <div class="section02" >
    <img v-for="(i,index) in indexSection02.indexSection02" :src="i"/>
  </div>
</template>

<script>
    export default {
        name: "IndexSection02",
      props: ["indexSection02"]
    }
</script>

<style scoped>
  .section02{
    box-sizing: border-box;
    width: 100%;
    padding: 0.1rem 0.11rem;
  }
  .section02 img{
    width: 1.74rem;
    height: 1.15rem;
    float: left;
    margin-bottom: 0.05rem;
  }
  .section02 img:nth-child(2n+1){
    margin-right: 0.04rem;
  }
</style>
