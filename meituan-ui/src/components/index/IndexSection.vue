<template>
  <div v-if="datas">
    <index-lunbotu :datas="datas"></index-lunbotu>
    <index-section01 :indexSection01="datas.index"></index-section01>
    <index-section02 :indexSection02="datas.index"></index-section02>
    <index-section03 :indexSection03="datas.index.indexSection03"></index-section03>
  </div>
</template>

<script>
    import IndexLunbotu from "./section/IndexLunbotu";
    import IndexSection01 from "./section/IndexSection01";
    import IndexSection02 from "./section/IndexSection02";
    import IndexSection03 from "./section/IndexSection03";
    export default {
        name: "indexSection",
      components: {IndexSection03, IndexSection02, IndexSection01, IndexLunbotu},
      props:["datas"],
      method:{
          // _initData(){
          //   console.log(data)
          // }
      },
      created() {
        // this._initData()
      }
    }

</script>

<style scoped>

</style>
