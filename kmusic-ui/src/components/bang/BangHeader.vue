<template>
  <header>
    <div class="header_one">
      <h1>点歌</h1>
      <a href="#" class="search">
        <img src="../../assets/images/s01.png"/>
        <span>搜索歌曲、歌手和用户</span>
        <img src="../../assets/images/s02.png"/>
      </a>
      <img class="last" src="../../assets/images/h3.png" alt="">
    </div>
  </header>
</template>

<script>
    export default {
        name: "BangHeader"
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
    background: #bc4030;
    display: -webkit-flex;
  }
  .header_one h1{
    font-size: .25rem;
    color: white;
    padding: .1rem .17rem 0;
  }
  .last{
    width: .25rem;
    height:.2rem;
    margin-top: .17rem;
  }
  .search{
    width: 2.36rem;
    height: .29rem;
    background: rgba(0,0,0,.2);
    font-size: 12px;
    color: #e8c3c5;
    border-radius: .15rem;
    display: -webkit-flex;
    -webkit-justify-content: center;
    -webkit-align-items:center;
    margin-right: .15rem;
    margin-top: .11rem;
  }
  .search span{
    margin-left: .1rem;
    margin-right: .1rem;
  }
  .search img:nth-child(1){
    width: .16rem;
    height: .18rem;
  }
  .search img:nth-child(3){
    width: .16rem;
    height: .18rem;
  }
</style>
