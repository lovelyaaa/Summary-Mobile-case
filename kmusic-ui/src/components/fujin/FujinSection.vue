<template>
  <section>
    <div class="main" v-if="datas" v-for="(i,index) in datas" :key="index">
      <div class="main_left">
        <img :src="i.titleImg" alt="">
      </div>
      <div class="main_right">
        <h3>{{i.titleName}}</h3>
        <p class="pp">{{i.titleLong}}</p>
        <span>{{i.titleInfo}}</span>
        <div class="last">
          <img :src="i.titlebanner" alt="">
        </div>
        <div class="la">
          <p><img src="../../assets/images/li1.png">送礼</p>
          <p><img src="../../assets/images/li2.png">分享</p>
          <p><img src="../../assets/images/li3.png">评论</p>
        </div>
      </div>
    </div>
    <!--<div class="main">-->
      <!--<div class="main_left">-->
        <!--<img src="../../assets/images/tu5.png" alt="">-->
      <!--</div>-->
      <!--<div class="main_right">-->
        <!--<h3>一只猫</h3>-->
        <!--<p class="pp">200m</p>-->
        <!--<span>我成为了我的好友擂主，不服来战！</span>-->
        <!--<div class="last">-->
          <!--<img src="../../assets/images/da2.png" alt="">-->
        <!--</div>-->
        <!--<div class="la">-->
          <!--<p><img src="../../assets/images/li1.png">送礼</p>-->
          <!--<p><img src="../../assets/images/li2.png">分享</p>-->
          <!--<p><img src="../../assets/images/li3.png">评论</p>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="main">-->
      <!--<div class="main_left">-->
        <!--<img src="../../assets/images/tu1.png" alt="">-->
      <!--</div>-->
      <!--<div class="main_right">-->
        <!--<h3>沫沫</h3>-->
        <!--<p class="pp">500m</p>-->
        <!--<span>我怀念的</span>-->
        <!--<div class="last">-->
          <!--<img src="../../assets/images/da2.png" alt="">-->
        <!--</div>-->
        <!--<div class="la">-->
          <!--<p><img src="../../assets/images/li1.png">送礼</p>-->
          <!--<p><img src="../../assets/images/li2.png">分享</p>-->
          <!--<p><img src="../../assets/images/li3.png">评论</p>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  </section>
</template>

<script>
    export default {
        name: "FujinSection",
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
  .main_right .pp{
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
    width: 3rem;
    height:.8rem;
  }
  .la{
    display: -webkit-flex;
    -webkit-justify-content: space-around;
  }
  .la img{
    width: .17rem;
    height: .17rem;
    margin-right: .05rem;
  }
  .la p{
    font-size: .13rem;
    color: #474747;
    display: -webkit-flex;
    margin-top: .12rem;
    margin-bottom: .13rem;
  }
</style>
