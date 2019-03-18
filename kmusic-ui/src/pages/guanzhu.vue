<template>
    <div>
      <guanzhu-header></guanzhu-header>
      <guanzhu-section  v-if="guanZhuData.guanzhu" :datas="guanZhuData.guanzhu.title"></guanzhu-section>
      <public-footer></public-footer>
    </div>
</template>

<script>
    import GuanzhuHeader from "../components/guanzhu/GuanzhuHeader";
    import PublicFooter from "../components/PublicFooter";
    import GuanzhuSection from "../components/guanzhu/GuanzhuSection";
    import axios from "axios";
    export default {
        name: "guanzhu",
      components: {GuanzhuSection, PublicFooter, GuanzhuHeader,axios},
      data(){
          return{
            guanZhuData:{}
          }
      },
      methods:{
        _initData(){
          axios.get("./static/data.json").then(res=>{
            console.log(res);
            this.guanZhuData = res.data;
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
