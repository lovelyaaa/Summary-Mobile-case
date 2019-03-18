<template>
  <video controls="controls" autoplay="true" loop>
    <source src="../../assets/images/2.mp4" type="video/mp4" preload="preload">
  </video>
</template>

<script>
    export default {
        name: "TuijianVideo"
    }
</script>

<style scoped>
  video{
    width: 100%;
    height: 100%;
    /*-webkit-filter:grayscale(100%);*/
  }
</style>
