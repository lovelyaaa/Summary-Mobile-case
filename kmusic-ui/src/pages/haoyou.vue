<template>
  <div>
    <haoyou-header></haoyou-header>
    <haoyou-section v-if="haoYouData.haoyou" :datas="haoYouData.haoyou.title"></haoyou-section>
    <public-footer></public-footer>
  </div>

</template>

<script>
    import HaoyouHeader from "../components/haoyou/HaoyouHeader";
    import HaoyouSection from "../components/haoyou/HaoyouSection";
    import PublicFooter from "../components/PublicFooter";
    import axios from "axios"
    export default {
        name: "haoyou",
      components: {PublicFooter, HaoyouSection, HaoyouHeader,axios},
      data(){
        return{
          haoYouData:{}
        }
      },
      methods:{
        _initData(){
          axios.get("./static/data.json").then(res=>{
            console.log(res);
            this.haoYouData = res.data;
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
