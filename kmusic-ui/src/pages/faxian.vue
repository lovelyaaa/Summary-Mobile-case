<template>
    <div>
        <faxian-header></faxian-header>
        <faxian-header-two v-if="faXianData.faxian" :datas="faXianData.faxian.lunbo"></faxian-header-two>
        <faxian-nav></faxian-nav>
        <faxian-main></faxian-main>
        <public-footer></public-footer>
    </div>
</template>
<script>
import FaxianHeader from '../components/faxian/FaxianHeader.vue';
import PublicFooter from '../components/PublicFooter.vue';
import FaxianNav from "../components/faxian/FaxianNav.vue";
import FaxianMain from "../components/faxian/FaxianMain.vue";
import FaxianHeaderTwo from '../components/faxian/FaxianHeaderTwo.vue';
import axios from "axios";
export default {
    name:"faxian",
    components:{FaxianHeader, FaxianHeaderTwo, FaxianNav, FaxianMain, PublicFooter,axios},
  data(){
      return{
        faXianData:{}
      }
  },
  methods:{
    _initData(){
      axios.get("./static/data.json").then(res=>{
        console.log(res);
        this.faXianData = res.data;
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
  body{
    background: white;
  }
</style>
