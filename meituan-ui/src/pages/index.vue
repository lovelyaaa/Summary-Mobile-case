<template>
  <div>
    <index-header></index-header>
    <index-section :datas="indexData" v-if="indexData"></index-section>
    <index-footer></index-footer>
  </div>
</template>

<script>
    import IndexHeader from "../components/index/IndexHeader";
    import IndexSection from "../components/index/IndexSection";
    import indexFooter from "../components/index/IndexFooter";
    // 方法1：
    import indexData from "../../static/data.json"
    //  方法2：import axios from "axios";
    export default {
      name: "index",
      components: {indexFooter, IndexSection, IndexHeader},
      data(){
        return{
          indexData:indexData
        };
      },
      // 方法2：
      // methods:{
      //   _initData(){
      //     axios.get("/static/data.json").then (res=>{
      //       this.indexData = res.data;
      //       // console.log(this.indexData)
      //     })
      //   }
      // },
      // created(){
      //   this._initData()
      // }
    }
</script>

<style>
  @import "../assets/public.css";
</style>
