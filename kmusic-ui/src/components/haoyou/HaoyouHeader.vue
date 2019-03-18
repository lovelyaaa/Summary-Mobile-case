<template>
  <header>
    <div class="header_one">
      <router-link tag="a" to="/guanzhu">关注</router-link>
      <router-link tag="a" to="/haoyou" class="big">好友</router-link>
      <router-link tag="a" to="/fujin">附近</router-link>
      <router-link tag="a" to="/tuijian">推荐</router-link>
      <a href="javascript:;"><img class="nit" src="../../assets/images/h4.png" alt=""></a>
      <router-link tag="a" to="/dangqian"><img src="../../assets/images/h3.png" alt=""></router-link>
    </div>
  </header>
</template>

<script>
    export default {
        name: "HaoyouHeader"
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
    background: #bc4030;
    display: -webkit-flex;
  }
  .header_one a{
    font-size: .16rem;
    color:#f1bbb5;
    margin-right: .17rem;
  }
  .header_one a:first-child{
    padding-left:.17rem;
    margin-right: 0;
  }
  .header_one .big{
    font-size: .25rem;
    color: white;
    font-weight: 600;
    color: white;
    padding-left:.17rem;
  }
  .header_one img{
    width: .25rem;
    height:.2rem;
    margin-top: .17rem;
  }
  .header_one .nit{
    margin-left: .55rem;
  }
</style>
