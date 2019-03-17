<template>
  <div class="appList">
    <div class="alist">
      <img :src="data.listImg"/>
      <div class="alistRight">
        <div class="alst">
          <h4>{{data.shopName}}</h4>
          <p>{{data.shopDesc}}</p>
          <span>{{data.shopKind}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "aaList",
      props:["data"]
    }
</script>

<style scoped>
  @import "../../assets/scss/shoppingMall.css";
</style>
