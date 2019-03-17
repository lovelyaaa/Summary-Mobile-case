<template>
  <div>
    <div class="list">
      <div class="listLeft">
        <p>{{data.lisp}}</p>
        <span>{{data.lisSp}}</span>
      </div>
      <img class="listRight" :src="data.listimg"/>
    </div>
  </div>

</template>

<script>
    export default {
        name: "toList",
        props:["data"]
    }
</script>

<style scoped>
  @import "../../assets/scss/index.css";
</style>
