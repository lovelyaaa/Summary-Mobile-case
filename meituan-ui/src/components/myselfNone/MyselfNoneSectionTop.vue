<template>
  <div class="sectionTop">
    <img src="static/img/myself-04.png"/>
    <router-link tag="a" to="/myself"><h1>请点击登录</h1></router-link>
  </div>
</template>

<script>
    export default {
        name: "MyselfNoneSectionTop"
    }
</script>

<style scoped>

  /*sectionTop*/
  .sectionTop{
    background-color: #FFFFFF;
    width: 100%;
    height: 0.68rem;
    position: relative;
    border-radius: 50%s;
    margin-top: 0.76rem;
    border-top-left-radius: 3.75rem 0.36rem;
    border-top-right-radius: 3.75rem 0.36rem;
  }
  .sectionTop img:nth-child(1){
    position: absolute;
    top: -0.38rem;
    left: 1.6rem;
    width: ;
    height: .58rem;
    widows: .58rem;
  }
  .sectionTop h1{
    font-size: 0.16rem;
    color: #222222;
    line-height: 0.68rem;
    text-align: center;
  }
</style>
