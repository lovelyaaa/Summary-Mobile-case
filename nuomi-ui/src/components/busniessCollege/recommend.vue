<template>
    <div class="recommend">
      <recTop></recTop>
      <recList :data="data.recList"></recList>
    </div>
</template>

<script>
  import recList from "./recList"
  import recTop from "./recTop"
    export default {
        name: "recommend",
        props:["data"],
      components:{
        recList,
        recTop
      }
    }
</script>

<style scoped>
  .recommend{
    padding: 0 .15rem;
    height: 4.03rem;
    background: #fff;
    margin-top: .11rem;
  }
</style>
