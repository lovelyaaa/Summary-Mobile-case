<template>
  <div>
    <fujin-header></fujin-header>
    <fujin-section v-if="fujinData.fujin" :datas="fujinData.fujin.title"></fujin-section>
    <public-footer></public-footer>
  </div>

</template>

<script>
    import FujinHeader from "../components/fujin/FujinHeader";
    import FujinSection from "../components/fujin/FujinSection";
    import PublicFooter from "../components/PublicFooter";
    import axios from "axios";
    export default {
        name: "fujin",
      components: {PublicFooter, FujinSection, FujinHeader,axios},
      data(){
        return{
          fujinData:{}
        }
      },
      methods:{
        _initData(){
          axios.get("./static/data.json").then(res=>{
            console.log(res);
            this.fujinData = res.data;
          })
        }
      },
      mounted(){
        // console.log(this.guanZhuData)
        this._initData();
      }
    }
</script>

<style>
@import "../assets/css/public.css";
</style>
