<template>
  <div class="proList">
    <img src="../../../static/img/business_img/productImg.jpg" alt="">
    <div class="proListTop">
      <p>{{data.proListTopP}}</p>
      <p>{{data.ListBottom}}</p>
      <p>{{data.ListBottomag}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "proList",
      props:["data"]
    }
</script>

<style scoped>
  @import "../../assets/scss/businessCollege.css";
</style>
