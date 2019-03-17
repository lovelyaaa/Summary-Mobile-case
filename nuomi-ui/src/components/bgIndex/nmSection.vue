<template>
  <section>
    <nmNav :data="data"></nmNav>
    <secTogether :data="data"></secTogether>
  </section>
</template>

<script>
  import nmNav from "./nmNav"
  import secTogether from "./secTogether"
    export default {
        name: "nmSection",
        props:["data"],
        components:{
          nmNav,
          secTogether
        }
    }
</script>

<style scoped>
  @import "../../assets/scss/index.css";
</style>
