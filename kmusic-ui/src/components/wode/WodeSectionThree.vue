<template>
    <div class="section_three">
            <div class="dt">
                <p>动态</p>
                <p>作品</p>
                <p>伴奏与合唱</p>
            </div>
      <div class="main">
        <div class="main_left">
          <img src="../../assets/images/t1.png" alt="">
        </div>
        <div class="main_right">
          <h3>橙月</h3>
          <p>02-23 16:46</p>
          <span>我刚唱了一首歌，快来听听吧。</span>
          <div class="last">
            <img src="../../assets/images/p01.png" alt="">
            <img src="../../assets/images/p02.png" alt="">
            <img src="../../assets/images/p03.png" alt="">
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name:"WodeSectionThree"
}
</script>
<style scoped>
.section_three{
	width: 100%;
	background: white;
	margin-top: .1rem;
  margin-bottom: .49rem;
}
.dt{
	height: .39rem;
	border-bottom: 1px solid #e6e1e1;
	display: -webkit-flex;
	-webkit-justify-content: space-around;
	-webkit-align-items: center;
}
.dt p{
	font-size: .13rem;
	color:#3d3d3d;
	padding:.13rem 0  .12rem  0;
}
.dt p:nth-child(1){
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
.main{
  width: 3.59rem;
  /*height: 2.5rem;*/
  padding-left: .16rem;
  margin-top: .14rem;
  border-bottom: 1px solid #e7e7e7;
  display: -webkit-flex;
}
.main_left img{
  width: .35rem;
  height:.35rem;
  margin-right: .09rem;
}
.main_right h3{
  font-size: .13rem;
  color:black;
}
.main_right p{
  font-size:.09rem;
  color:#999999;
  margin-top: .07rem;
  margin-bottom: .12rem;
}
.main_right span{
  font-size:.15rem;
  color:black;
  display: block;
  margin-bottom: .12rem;
}
.main_right .last{
  display: -webkit-flex;
}
.main_right .last img{
  width: .94rem;
  height:.94rem;
  margin-right: .08rem;
}
</style>
