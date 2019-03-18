<template>
  <section>
    <div class="section_one">
      <a href="javascript:;"><img src="../../assets/images/xx1.png" alt=""/><span>评论</span></a>
      <a href="javascript:;"><img src="../../assets/images/xx2.png" alt=""/><span>收到礼物</span></a>
      <a href="javascript:;"><img src="../../assets/images/xx3.png" alt=""/><span>私信</span></a>
      <a href="javascript:;"><img src="../../assets/images/xx4.png" alt=""/><span>最近听众</span></a>
    </div>
    <div class="hot_play">
      <a href="##" class="tit">
        <h3><p>公告</p>周二必备的工作效率加速器</h3>
        <img class="more" src="../../assets/images/jt.png">
      </a>
      <a href="##" class="nit">
        <img class="imgs" src="../../assets/images/tx1.png" alt="">
        <div class="cont">
          <h2>大赛<p>精彩赛事 快来关注</p></h2>
          <img class="more" src="../../assets/images/jt.png">
        </div>
      </a>
      <a href="##" class="nit">
        <img class="imgs" src="../../assets/images/tx2.png" alt="">
        <div class="cont">
          <h2>认证歌手<p>林玥儿全新专辑火热上线</p></h2>
          <img class="more" src="../../assets/images/jt.png">
        </div>
      </a>
      <a href="##" class="nit">
        <img class="imgs" src="../../assets/images/tx3.png" alt="">
        <div class="cont">
          <h2>K歌商城<p>歌神必备！欢唱领先一步>></p></h2>
          <img class="more" src="../../assets/images/jt.png">
        </div>
      </a>
      <a href="##" class="nit">
        <img class="imgs" src="../../assets/images/tx4.png" alt="">
        <div class="cont">
          <h2>现金红包大放送<p>邀请好友即得现金，可提现微信钱包</p></h2>
          <img class="more" src="../../assets/images/jt.png">
        </div>
      </a>
      <a href="##" class="nit">
        <img class="imgs" src="../../assets/images/tx5.png" alt="">
        <div class="cont">
          <h2>随心听<p>随心听，你的专属私人音乐台</p></h2>
          <img class="more" src="../../assets/images/jt.png">
        </div>
      </a>
    </div>
    <div class="hot_play">
      <a href="##" class="nit">
        <img class="imgs" src="../../assets/images/tx6.png" alt="">
        <div class="cont">
          <h2>抢麦</h2>
          <div class="cot">
            <p>当抢麦冠军，赢鲜花好礼</p>
            <img class="more" src="../../assets/images/jt.png">
          </div>
        </div>
      </a>
      <a href="##" class="nit">
        <img class="imgs" src="../../assets/images/tx7.png" alt="">
        <div class="cont">
          <h2>附近的人</h2>
          <img class="more" src="../../assets/images/jt.png">
        </div>
      </a>
      <a href="##" class="nit">
        <img class="imgs" src="../../assets/images/tx8.png" alt="">
        <div class="cont">
          <h2>家族</h2>
          <img class="more" src="../../assets/images/jt.png">
        </div>
      </a>
      <a href="##" class="nit">
        <img class="imgs" src="../../assets/images/tx9.png" alt="">
        <div class="cont">
          <h2>教唱课程</h2>
          <div class="cot">
            <p>知否知否-唱出古韵</p>
            <img class="more" src="../../assets/images/jt.png">
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<script>
    export default {
        name: "XiaoxiSection"
    }
</script>

<style scoped>
  section{
    width: 100%;
    background: #eeeeee;
    -webkit-flex:1;
    overflow-y: auto;
    margin-top: .53rem;
    margin-bottom: .49rem;
  }
  .section_one{
    width: 100%;
    height: 1rem;
    background: white;
    display: -webkit-flex;
    -webkit-flex-wrap: wrap;
  }
  .section_one img{
    width: .4rem;
    height:.4rem;
    margin: 0 auto;
    margin-top: .2rem;
    margin-bottom: .06rem;
  }
  .section_one span{
    font-size: .13rem;
    color:#3d3d3d;
    display: block;
  }
  .section_one a{
    width: 25%;
    text-align: center;
  }

  .hot_play{
    background: white;
    margin-top:.1rem;
  }
  .tit{
    display: -webkit-flex;
    -webkit-justify-content:space-between;
    height: .5rem;
    background: white;
    -webkit-align-items:center;
    /*margin-top:.1rem;*/
    /*margin-bottom: .1rem;*/
    border-bottom: 1px solid #e7e7e7;
  }
  .tit h3{
    color: #262626;
    font-size: .13rem;
    font-weight: 100;
    display: -webkit-flex;
  }
  .tit p{
    width:.31rem;
    height:.16rem;
    background: #f0907d;
    border-radius: 2px;
    font-size: .1rem;
    color:#fef7f5;
    line-height: .16rem;
    text-align: center;
    margin-left: .18rem;
    margin-right: .1rem;
  }
  .more{
    width: .1rem;
    height: .1rem;
    margin-left: .04rem;
    margin-right: .15rem;
  }
  .nit{
    width: 100%;
    height: .6rem;
    display: -webkit-flex;
    -webkit-align-items: center;
  }
  .imgs{
    width: .47rem;
    height: .47rem;
    margin-left: .14rem;
    margin-right: .1rem;
  }
  .cont{
    width: 100%;
    height: .6rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
    border-bottom: 1px solid #e7e7e7;
  }
  .cont h2{
    color: #262626;
    font-size: .14rem;
    font-weight: 100;
  }
  .cot{
    display: -webkit-flex;
    -webkit-align-items: center;
  }
  .cont p{
    font-size:.11rem;
    color:#b1b1b1;
  }
</style>
