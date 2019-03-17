<template>
  <section>
    <secSmall></secSmall>
    <aaList v-for="(i,index) in data.aList" :key="index" :data="i"></aaList>
  </section>
</template>

<script>
  import secSmall from "./secSmall"
  import aaList from "./aaList"
    export default {
      name: "nmSection",
      props:["data"],
      components:{
          secSmall,
          aaList
      }
    }
</script>

<style scoped>
  section{
    padding-left: .12rem;
    flex: 1;
    overflow-y: auto;
  }
</style>
