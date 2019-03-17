<template>
  <div class="section">
    <div class="secTop">
      <h3>{{data.title}}</h3>
      <span>{{data.titleTitle}}</span>
    </div>
    <div class="secVideo">
      <img :src="data.videoPic"/>
    </div>
    <div class="secTopic">
      <p>{{data.secTopic}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "toSec",
        props:["data"]
    }
</script>

<style>
  @import "../../assets/scss/index.css";
</style>
