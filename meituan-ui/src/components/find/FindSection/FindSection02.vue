<template>
    <div class="section-right" v-if="datasRight">
      <find-section02-sun :datasRight="datasRight.findRight"></find-section02-sun>
    </div>
</template>

<script>
    import FindSection02Sun from "./FindSection02/FindSection02Sun";
    export default {
        name: "FindSection02",
      components: {FindSection02Sun},
      props:["datasRight"]
    }
</script>

<style scoped>

</style>
