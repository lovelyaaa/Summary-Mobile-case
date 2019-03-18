<template>
    <div v-if="findData">
      <find-header></find-header>
      <find-section :datas="findData.find"></find-section>
      <find-footer></find-footer>
    </div>
</template>

<script>
    import FindHeader from "../components/find/FindHeader";
    import FindSection from "../components/find/FindSection";
    import FindFooter from "../components/find/FindFooter";
    import axios from "axios";
    export default {
      name: "find",
      data(){
        return{
          findData:{}
        }
      },
      components: {FindFooter, FindSection, FindHeader},
      methods:{
        _initData(){
          axios.get("/static/data.json").then(res=>{
            this.findData = res.data;
            console.log(this.findData)
          })
        }
      },
      created() {
        this._initData()
      }

    }
</script>

<style>
  @import "../assets/public.css";
  body{
    background-color: #fff;
  }
  section{
    margin-top: 0.46rem;
    box-sizing:border-box;
    width: 100%;
    background-color: #f2f2f2;
    display: -webkit-flex;
    overflow: hidden;
    margin-bottom: 0.5rem;
    overflow: auto;
  }
  .section-left{
    width: 50%;
    box-sizing: border-box;
    background-color: #f0f0f0;
  }
  .section-left01{
    width:1.67rem;
    height: 3.2rem;
    background-color: #fff;
    margin: 0 auto;
    margin-bottom:0.1rem;
  }
  .section-left01 img{
    width: 100%;
  }
  .section-left01>p{
    font-size: 0.13rem;
    color: #000000;
    width: 1.4rem;
    margin: 0.1rem auto 0;
    font-weight: bold;
    line-height: 0.2rem;
  }
  .section-left01-right{
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    width: 1.4rem;
    margin: 0.1rem auto 0;
  }
  .section-left01-right p{
    display: -webkit-flex;
    -webkit-justify-content: flex-start;
  }
  .section-left01-right p img{
    width: 0.2rem;
    height: 0.2rem;
    margin-right: 0.05rem;
  }
  .section-left01-right p span{
    font-size: 0.11rem;
  }
  .section-left01-right img{
    width: 0.2rem;
    height: 0.2rem;
  }
  .section-right{
    width: 50%;
    box-sizing: border-box;
    background-color: #f0f0f0;
  }
  .section-right .section-left01{
    width:1.67rem;
    height: 3.1rem;
    margin-bottom:0.1rem;
  }

</style>
