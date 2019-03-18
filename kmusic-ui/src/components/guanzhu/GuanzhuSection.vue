<template>
  <section>
    <div class="main" v-if="datas" v-for="(i,index) in datas" :key="index">
      <div class="main_left">
        <img :src="i.titleImg" alt="">
      </div>
      <div class="main_right">
        <h3>{{i.titleName}}</h3>
        <p>{{i.titleTime}}</p>
        <span>{{i.titleInfo}}</span>
        <div class="last">
          <img :src="i.titlebanner" alt="">
        </div>
      </div>
    </div>
    <!--<div class="main">-->
      <!--<div class="main_left">-->
        <!--<img src="../../assets/images/tu2.png" alt="">-->
      <!--</div>-->
      <!--<div class="main_right">-->
        <!--<h3>沫沫</h3>-->
        <!--<p>02-23 16:46</p>-->
        <!--<span>好久不见，快给我发起约唱吧~</span>-->
        <!--<div class="last">-->
          <!--<img src="../../assets/images/yue.png" alt="">-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="main">-->
      <!--<div class="main_left">-->
        <!--<img src="../../assets/images/t1.png" alt="">-->
      <!--</div>-->
      <!--<div class="main_right">-->
        <!--<h3>沫沫</h3>-->
        <!--<p>02-23 16:46</p>-->
        <!--<span>好久不见，快给我发起约唱吧~</span>-->
        <!--<div class="last">-->
          <!--<img src="../../assets/images/yue.png" alt="">-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  </section>
</template>

<script>
    export default {
        name: "GuanzhuSection",
        props:["datas"]
    }
</script>

<style scoped>
  section{
    -webkit-flex:1;
    overflow-y: auto;
    margin-top: .53rem;
    margin-bottom: .49rem;
  }
  .main{
    width: 3.59rem;
    height: 2.5rem;
    padding-left: .16rem;
    margin-top: .16rem;
    border-bottom: 1px solid #e7e7e7;
    display: -webkit-flex;
  }
  .main_left img{
    width: .35rem;
    height:.35rem;
    margin-right: .09rem;
  }
  .main_right h3{
    font-size: .15rem;
    color:black;
  }
  .main_right p{
    font-size:.1rem;
    color:#999999;
    margin-top: .08rem;
    margin-bottom: .13rem;
  }
  .main_right span{
    font-size:.15rem;
    color:black;
    display: block;
    margin-bottom: .12rem;
  }
  .main_right .last img{
    width: 3.05rem;
    height:1.5rem;
  }
</style>
