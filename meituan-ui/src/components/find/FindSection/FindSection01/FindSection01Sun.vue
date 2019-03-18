<template>
  <div>
  <div class="section-left01" v-for="i in datasLeft">
    <img :src="i.findLeftImg" alt="" />
    <p>{{i.findLeftContent}}</p>
    <div class="section-left01-right">
      <p>
        <img :src="i.findLeftSelfImg" alt="" />
        <span>{{i.findLeftName}}</span>
      </p>
      <img :src="i.findLeftIcon" alt="" />
    </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "FindSection01Sun",
      props:["datasLeft"]
    }
</script>

<style scoped>

</style>
