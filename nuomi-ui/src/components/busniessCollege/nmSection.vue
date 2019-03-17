<template>
    <section>
      <banner :data="data"></banner>
      <bsVideo></bsVideo>
      <recommend :data="data"></recommend>
      <lessList :data="data"></lessList>
    </section>
</template>

<script>
  import banner from "./banner"
  import bsVideo from "./bsVideo"
  import recommend from "./recommend"
  import lessList from "./lessList"
    export default {
      name: "nmSection",
      props:["data"],
      components:{
        banner,
        bsVideo,
        recommend,
        lessList
      }
    }
</script>

<style scoped>
  section{
    flex: 1;
    overflow-y: auto;
  }
  @import "../../assets/scss/businessCollege.css";
</style>
