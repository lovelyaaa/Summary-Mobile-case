<template>
  <header>
    <div class="header_one">
      <router-link tag="a" to="/guanzhu">关注</router-link>
      <router-link tag="a" to="/haoyou">好友</router-link>
      <router-link tag="a" to="/fujin">附近</router-link>
      <router-link tag="a" to="/tuijian" class="big">推荐</router-link>
      <a href="javascript:;"><img class="nit" src="../../assets/images/h4.png" alt=""></a>
      <router-link tag="a" to="/dangqian"><img src="../../assets/images/h3.png" alt=""></router-link>
    </div>
    <p>1411.5万次播放</p>
    <div class="header_two">
      <img src="../../assets/images/yuefu.png" alt="">
      <h6>清唱</h6>
      <img src="../../assets/images/jian1.png">
    </div>
  </header>
</template>

<script>
    export default {
        name: "TuijianHeader"
    }
</script>

<style scoped>
  header{
    width: 100%;
    position: fixed;
    top: 0;
  }
  .header_one{
    width: 100%;
    height: .53rem;
    line-height: .53rem;
    display: -webkit-flex;
  }
  .header_one a{
    font-size: .16rem;
    /*color:#a4a7a6;*/
    color: white;
    margin-right: .17rem;
  }
  .header_one a:first-child{
    padding-left:.17rem;
  }
  .header_one a:nth-child(3){
    margin-right: 0;
  }
  .header_one .big{
    font-size: .25rem;
    color: white;
    font-weight: 600;
    color: white;
    padding-left:.17rem;
    margin-right: 0;
  }
  .header_one img{
    width: .25rem;
    height:.2rem;
    margin-top: .17rem;
  }
  .header_one .nit{
    margin-left: .75rem;
  }
  header p{
    font-size: .15rem;
    color:white;
    display: block;
    margin-left: .15rem;
    margin-top: .1rem;
  }
  .header_two{
    margin-top: .1rem;
    display: -webkit-flex;
    -webkit-align-items: center;
  }
  .header_two img:first-child{
    width: .14rem;
    height: .13rem;
    margin-left: .15rem;
  }
  .header_two img:last-child{
    width: .06rem;
    height: .1rem;
  }
  .header_two h6{
    font-size: .13rem;
    color:white;
    font-weight:100;
    margin:0 .08rem;
  }
</style>
