<template>
    <section>
      <find-section01 :datasLeft="datas"></find-section01>
      <find-section02 :datasRight="datas"></find-section02>
    </section>
</template>

<script>
    import FindSection01 from "./FindSection/FindSection01";
    import FindSection02 from "./FindSection/FindSection02";
    export default {
        name: "FindSection",
      components: {FindSection02, FindSection01},
      props:["datas"]
    }
</script>

<style scoped>

</style>
