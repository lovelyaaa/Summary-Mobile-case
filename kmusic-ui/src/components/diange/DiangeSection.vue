<template>
  <section>
    <div class="section_one">
      <a href="javascript:;"><img src="../../assets/images/hc1.png" alt=""/><span>抢麦</span></a>
      <a href="javascript:;"><img src="../../assets/images/hc2.png" alt=""/><span>朗诵</span></a>
      <a href="javascript:;"><img src="../../assets/images/hc3.png" alt=""/><span>直播</span></a>
      <a href="javascript:;"><img src="../../assets/images/hc4.png" alt=""/><span>歌房</span></a>
      <a href="javascript:;"><img src="../../assets/images/hc5.png" alt=""/><span>合唱</span></a>
      <a href="javascript:;"><img src="../../assets/images/hc6.png" alt=""/><span>清唱</span></a>
      <a href="javascript:;"><img src="../../assets/images/hc7.png" alt=""/><span>说唱</span></a>
      <a href="javascript:;"><img src="../../assets/images/hc8.png" alt=""/><span>短视频</span></a>
    </div>
    <div class="section_two">
      <img src="../../assets/images/d01.png" alt="">
      <router-link to="banzou"><img src="../../assets/images/d02.png" alt=""></router-link>
    </div>
    <div class="hot_play">
      <div class="tit">
        <h3>精选分类</h3>
        <a href="#" class="more">查看全部</a>
      </div>
      <div class="content">
        <a href="#">
          <img src="../../assets/images/hot1.png" alt=""/>
        </a>
        <a href="#">
          <img src="../../assets/images/hot2.png" alt=""/>
        </a>
        <a href="#">
          <img src="../../assets/images/hot3.png" alt=""/>
        </a>
        <a href="#">
          <img src="../../assets/images/hot1.png" alt=""/>
        </a>
        <a href="#">
          <img src="../../assets/images/hot1.png" alt=""/>
        </a>
        <a href="#">
          <img src="../../assets/images/hot1.png" alt=""/>
        </a>
      </div>
    </div>
    <div class="hot_play play_two">
      <div class="tit">
        <h3>猜你喜欢</h3>
        <a href="#" class="more">查看全部</a>
      </div>
      <div class="list">
        <a class="lis" href="#">
          <div class="list_left">
            <img src="../../assets/images/p1.png" alt="">
            <div class="left1">
              <div class="nit">
                <p>下一秒</p>
                <p>评分</p>
                <p>HQ</p>
                <p>修音</p>
                <p>KTV</p>
              </div>
              <P>张碧晨</P>
              <p>由你唱的 追光者 推荐</p>
            </div>
          </div>
          <div class="list_right">
            <img src="../../assets/images/jia.png" alt="">
            <p>K歌</p>
          </div>
        </a>
        <a class="lis" href="#">
          <div class="list_left">
            <img src="../../assets/images/p1.png" alt="">
            <div class="left1">
              <div class="nit">
                <p>下一秒</p>
                <p>评分</p>
                <p>HQ</p>
                <p>修音</p>
                <p>KTV</p>
              </div>
              <P>张碧晨</P>
              <p>由你唱的 追光者 推荐</p>
            </div>
          </div>
          <div class="list_right">
            <img src="../../assets/images/jia.png" alt="">
            <p>K歌</p>
          </div>
        </a>
        <a class="lis" href="#">
          <div class="list_left">
            <img src="../../assets/images/p1.png" alt="">
            <div class="left1">
              <div class="nit">
                <p>下一秒</p>
                <p>评分</p>
                <p>HQ</p>
                <p>修音</p>
                <p>KTV</p>
              </div>
              <P>张碧晨</P>
              <p>由你唱的 追光者 推荐</p>
            </div>
          </div>
          <div class="list_right">
            <img src="../../assets/images/jia.png" alt="">
            <p>K歌</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "DiangeSection"
    }
</script>

<style scoped>
  section{
    width: 100%;
    -webkit-flex:1;
    overflow-y: auto;
    margin-top:.53rem;
    margin-bottom: .49rem;
  }
  .section_one{
    width: 100%;
    height: 1.8rem;
    background: white;
    margin-top: .06rem;
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
  .section_two{
    margin: 0 .15rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
  }
  .section_two img{
    width: 1.69rem;
    height: .7rem;
  }
  .tit{
    display: -webkit-flex;
    -webkit-justify-content:space-between;
    height: .3rem;
    -webkit-align-items:center;
    margin-top:.29rem;
    margin-bottom: .1rem;
  }
  .tit h3{
    color: #141414;
    font-size: .2rem;
    padding-left: .15rem;
  }
  .more{
    color: #5c6f89;
    font-size: .13rem;
    padding-right: .15rem;
  }
  .content{
    display: -webkit-flex;
    width: 100%;
    margin-left: .15rem;
    overflow-x: auto;
  }
  .content a{
    margin-right: .07rem;
  }
  .content a img{
    width: .9rem;
    height: .9rem;
  }
  .lis{
    height: .72rem;
    margin-top: .13rem;
    margin-left: .15rem;
    border-bottom: 1px solid #e7e7e7;
    display: -webkit-flex;
  }
  .list_left{
    display: -webkit-flex;
  }
  .list_left img{
    width:.65rem;
    height:.65rem;
  }
  .left1{
    margin-top:.1rem;
    margin-left: .1rem;
  }
  .left1 p{
    font-size: .1rem;
    color: #acacac;
  }
  .nit{
    display: -webkit-flex;
  }
  .nit p{
    font-size: .15rem;
    color: #262626;
  }
  .nit p:nth-child(2){
    font-size: .1rem;
    color: #6b728b;
    border:2px solid #6b728b;
    margin-left: .05rem;
    margin-right: .03rem;
  }
  .nit p:nth-child(3){
    font-size: .1rem;
    color: #63c083;
    border:2px solid #63c083;
    margin-right: .03rem;
  }
  .nit p:nth-child(4){
    font-size: .1rem;
    color: #6592e5;
    border:2px solid #6592e5;
    margin-right: .03rem;
  }
  .nit p:nth-child(5){
    font-size: .1rem;
    color: #eaa944;
    border:2px solid #eaa944;
  }
  .list_right{
    display: -webkit-flex;
    -webkit-align-items: center;
  }
  .list_right img{
    width: .1rem;
    height: .1rem;
    margin-left: .23rem;
    margin-right: .15rem;
  }
  .list_right p{
    width: .53rem;
    height: .3rem;
    background: #f6f6f6;
    line-height: .3rem;
    text-align: center;
    border-radius: .15rem;
    font-size: .12rem;
    color: #de5b4c;
  }
</style>
