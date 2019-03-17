<template>
  <header>
    <hLeft></hLeft>
    <hRight></hRight>
  </header>
</template>

<script>
    import hLeft from "./hLeft"
    import hRight from "./hRight"
    export default {
        name: "nmHeader",
        components:{
          hLeft,
          hRight
        }
    }
</script>

<style scoped>
  @import "../../assets/scss/index.css";

</style>
