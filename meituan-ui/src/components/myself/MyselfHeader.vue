<template>
  <header>
    <img src="static/img/myself-01.png"/>
    <img class="myImg" src="static/img/myself-02.png"/>
    <img src="static/img/myself-03.png"/>
  </header>
</template>

<script>
    export default {
        name: "MyselfHeader"
    }
</script>

<style scoped>

  /*header*/
  header{
    z-index: 99;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.38rem;
    background-color:#60b9d0;
    display: flex;
    justify-content: space-between;
    padding:0 0.18rem;
    margin-bottom: 0.38rem;
  }
  header img{
    width: .2rem;
    height: .2rem;
    margin-top: 0.12rem;
  }
  .myImg{
    margin-left: 2rem;
  }

</style>
