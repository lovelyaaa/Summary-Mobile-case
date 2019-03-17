<template>
  <div>
    <div class="ftop">
      <p>{{data.ttp}}</p>
      <span></span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "toftop",
        props:["data"]
    }
</script>

<style scoped>
  @import "../../assets/scss/index.css";
</style>
