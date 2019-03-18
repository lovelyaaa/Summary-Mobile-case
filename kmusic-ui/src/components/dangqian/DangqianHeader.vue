<template>
  <header>
    <div class="dt">
      <p>当前</p>
      <p>随心听</p>
      <p>我的</p>
    </div>
    <router-link to="/"><img src="../../assets/images/cha.png" alt=""></router-link>
  </header>
</template>

<script>
    export default {
        name: "DangqianHeader"
    }
</script>

<style scoped>
  header{
    width: 100%;
    background: white;
    border-bottom: 1px solid #e6e1e1;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
    position: fixed;
    top: 0;
  }
  header img{
    width: .17rem;
    height: .17rem;
    margin-right: .2rem;
  }
  .dt{
    height: .43rem;
    background: white;
    display: -webkit-flex;
    -webkit-align-items: center;
    margin-left: .8rem;
  }
  .dt p{
    font-size: .15rem;
    color:#3d3d3d;
    padding:.13rem .17rem .12rem  .17rem;
  }
  .dt p:nth-child(3){
    color: #de5b4c;
    background-image: url(../../assets/images/line.png);
    background-size: .25rem;
    background-repeat: no-repeat;
    background-position: bottom center;
  }
  .dt p:hover{
    color: #de5b4c;
    background-image: url(../../assets/images/line.png);
    background-size: .25rem;
    background-repeat: no-repeat;
    background-position: bottom center;
  }
</style>
