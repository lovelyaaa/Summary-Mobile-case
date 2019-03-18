<template>
  <section>
    <div class="section_one">
      <a href="javascript:;"><img src="../../assets/images/sc1.png" alt=""/><span>收藏 0</span></a>
      <a href="javascript:;"><img src="../../assets/images/sc2.png" alt=""/><span>下载 0</span></a>
      <a href="javascript:;"><img src="../../assets/images/sc3.png" alt=""/><span>歌单 0</span></a>
      <a href="javascript:;"><img src="../../assets/images/sc4.png" alt=""/><span>播放历史 30</span></a>
    </div>
    <div class="section_two">
      <div class="tou">
        <img src="../../assets/images/bo.png" alt="">
        <p>播放全部</p>
        <p>(共4首)</p>
      </div>
      <a class="lis" href="#">
        <div class="list_left">
          <img src="../../assets/images/tm1.png" alt="">
        </div>
        <div class="list_right">
          <div class="left1">
            <p>体面</p>
            <div class="nit">
              <img class="ji" src="../../assets/images/ji1.png" alt="">
              <img class="ji" src="../../assets/images/ji1.png" alt="">
              <img class="ting" src="../../assets/images/ting.png" alt="">
              <p>14</p>
            </div>
          </div>
          <img class="last" src="../../assets/images/dian.png" alt="">
        </div>
      </a>
      <a class="lis" href="#">
        <div class="list_left">
          <img src="../../assets/images/tm2.png" alt="">
        </div>
        <div class="list_right">
          <div class="left1">
            <p>彩虹</p>
            <div class="nit">
              <img class="ji" src="../../assets/images/ji2.png" alt="">
              <img class="ting" src="../../assets/images/ting.png" alt="">
              <p>18</p>
            </div>
          </div>
          <img class="last" src="../../assets/images/dian.png" alt="">
        </div>
      </a>
      <a class="lis" href="#">
        <div class="list_left">
          <img src="../../assets/images/tm3.png" alt="">
        </div>
        <div class="list_right">
          <div class="left1">
            <p>想自由</p>
            <div class="nit">
              <img class="ji" src="../../assets/images/ji1.png" alt="">
              <img class="ting" src="../../assets/images/ting.png" alt="">
              <p>43</p>
            </div>
          </div>
          <img class="last" src="../../assets/images/dian.png" alt="">
        </div>
      </a>
      <a class="lis" href="#">
        <div class="list_left">
          <img src="../../assets/images/tm1.png" alt="">
        </div>
        <div class="list_right">
          <div class="left1">
            <p>体面</p>
            <div class="nit">
              <img class="ji" src="../../assets/images/ji1.png" alt="">
              <img class="ji" src="../../assets/images/ji1.png" alt="">
              <img class="ting" src="../../assets/images/ting.png" alt="">
              <p>58</p>
            </div>
          </div>
          <img class="last" src="../../assets/images/dian.png" alt="">
        </div>
      </a>
    </div>
  </section>
</template>

<script>
    export default {
        name: "DangqianSection"
    }
</script>

<style scoped>
  section{
    width: 100%;
    background: #f1f1f1;
    -webkit-flex:1;
    overflow-y: auto;
    margin-top: .53rem;
    margin-bottom: .49rem;
  }
  .section_one{
    width: 100%;
    height: .9rem;
    background: white;
    display: -webkit-flex;
    -webkit-flex-wrap: wrap;
  }
  .section_one img{
    width: .26rem;
    height:.26rem;
    margin: 0 auto;
    margin-top: .2rem;
    margin-bottom: .12rem;
  }
  .section_one span{
    font-size: .13rem;
    color:#696969;
    display: block;
  }
  .section_one a{
    width: 25%;
    text-align: center;
  }
  .section_two{
    width: 100%;
    height: 5rem;
    background: white;
    margin-top: .1rem;
  }
  .tou{
    height: .45rem;
    border-bottom: 1px solid #e7e7e7;
    display: -webkit-flex;
    -webkit-align-items: center;
  }
  .tou img{
    width: .17rem;
    height:.17rem;
    margin-left: .15rem;
    margin-right: .06rem;
  }
  .tou p{
    font-size: .13rem;
    color:#5e5e5e;
  }
  .tou p:last-child{
    color: #999999;
    margin-left: .12rem;
  }
  .lis{
    height: .65rem;
    background: white;
    padding-left: .15rem;
    display: flex;
  }
  .list_left img{
    width:.45rem;
    height:.45rem;
    padding-top: .13rem;
  }
  .left1{
    margin-top:.05rem;
    margin-left: .1rem;
  }
  .left1 p{
    font-size: .15rem;
    color: #262626;
  }
  .nit{
    display: -webkit-flex;
    -webkit-align-items: center;
    margin-top: .08rem;
  }
  .nit p{
    font-size: .1rem;
    color: #acacac;
  }
  .nit .ji{
    width: .08rem;
    height: .11rem;
  }
  .nit .ting{
    width: .12rem;
    height: .11rem;
    margin-left: .09rem;
    margin-right: .05rem;
  }
  .list_right{
    width: 100%;
    border-bottom: 1px solid #e7e7e7;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
  }
  .last{
    width: .15rem;
    height: .1rem;
    margin-right: .15rem;
  }
</style>
