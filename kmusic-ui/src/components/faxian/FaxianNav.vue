<template>
  <div class="nav">
    <a href="#">推荐</a>
    <a href="#">直播</a>
    <a href="#">歌房</a>
    <a href="#">金曲</a>
    <a href="#">MV</a>
    <a href="#">短视频</a>
    <a href="#">歌单</a>
    <a href="#">排行榜</a>
  </div>
</template>

<script>
    export default {
        name: "FaxianNav"
    }
</script>

<style scoped>
  .nav{
    width: 100%;
    height: .4rem;
    background: white;
    border-bottom: 1px solid #e6e1e1;
    display: -webkit-flex;
    -webkit-flex:1;
    overflow-x: auto;
  }
  .nav a{
    height: .4rem;
    line-height: .4rem;
    color: #595959;
    font-size: .13rem;
    -webkit-flex-shrink:0;
    padding:0 .17rem;
  }
  .nav a:nth-child(2){
    color: #de5b4c;
    background-image: url(../../assets/images/line.png);
    background-size: .25rem;
    background-repeat: no-repeat;
    background-position: bottom center;
  }
  .nav a:hover{
    color: #de5b4c;
    background-image: url(../../assets/images/line.png);
    background-size: .25rem;
    background-repeat: no-repeat;
    background-position: bottom center;
  }
</style>
