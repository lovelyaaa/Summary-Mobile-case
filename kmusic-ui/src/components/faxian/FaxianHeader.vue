<template>
    <div class="header_one">
        <h1>发现</h1>
        <a href="#" class="search">
            <img src="../../assets/images/s01.png"/>
            <span>搜索歌曲、歌手和用户</span>
            <img src="../../assets/images/s02.png"/>
        </a>
      <router-link tag="a" to="/dangqian"><img class="last" src="../../assets/images/h3.png" alt=""></router-link>
    </div>
</template>
<script>
export default {
    name:"FaxianHeader"
}
</script>
<style scoped>
.header_one{
	width: 100%;
	height: .53rem;
  background: #bc4030;
	display: -webkit-flex;
  -webkit-align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
}
.header_one h1{
	font-size: .25rem;
	color: white;
  margin-left: .17rem;
  margin-right: .17rem;
}
.last{
	width: .25rem;
	height:.2rem;
	/*margin-top: .17rem;*/
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
	/*margin-top: .11rem;*/
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
