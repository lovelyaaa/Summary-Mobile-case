<template>
  <div class="section-left" v-if="datasLeft">
    <find-section01-sun :datasLeft="datasLeft.findLeft"></find-section01-sun>
  </div>
</template>

<script>
    import FindSection01Sun from "./FindSection01/FindSection01Sun";
    export default {
      name: "FindSection01",
      components: {FindSection01Sun},
      props:["datasLeft"]
    }
</script>

<style scoped>

</style>
