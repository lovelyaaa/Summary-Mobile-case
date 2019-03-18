<template>
    <div class="section_one">
            <div class="header_two">
                <p></p>
                <img src="../../assets/images/g1.png" alt="">
            </div>
            <div class="section_one1">
                <img src="../../assets/images/t1.png" alt="">
                <h3>橙月</h3>
                <img src="../../assets/images/t2.png" alt="">
            </div>
            <div class="section_one2">
                <a href="javascript:;"><h2>7</h2><span>粉丝</span></a>
                <a href="javascript:;"><h2>5</h2><span>关注</span></a>
                <a href="javascript:;"><h2>88</h2><span>微信好友</span></a>
            </div>
            <div class="section_one3">
                <div class="dj">
                    <p>等级</p>
                    <img src="../../assets/images/d1.png" alt="">
                    <img src="../../assets/images/d2.png" alt="">
                </div>
                <div class="kg">
                    <p>k歌号</p>
                    <span>938928348</span>
                </div>
                <a class="qm" href=":;">
                    <p>签名</p>
                    <p>点击设置自己的个性签名</p>
                    <img src="../../assets/images/jt.png" alt="">
                </a>
            </div>
        </div>
</template>
<script>
export default {
    name:"WodeSectionOne"
}
</script>
<style scoped>
.header_two{
	height: .67rem;
    background: #bc4030;
	display: -webkit-flex;
	-webkit-justify-content: space-between;
	margin-top: .53rem;
}
.header_two img{
	width: .57rem;
	height:.59rem;
	padding-top: .05rem;
	padding-right: .25rem;
}

/* section{
	background: #eeeeee;
	-webkit-flex:1;
	overflow-y: auto;
} */
.section_one{
	width: 100%;
	height: 3rem;
	background: white;
}
.section_one1{
	height: .42rem;
	display: flex;
	position: relative;
}
.section_one1 img:nth-child(1){
	width: .8rem;
	height: .8rem;
	padding-left: .15rem;
	position: absolute;
	top: -0.4rem;
}
.section_one1 img:nth-child(3){
	width: .53rem;
	height: .18rem;
	margin-top: .12rem;
}
.section_one1 h3{
	font-size: .18rem;
	margin-left: 1.15rem;
	margin-right: .09rem;
	margin-top: .08rem;
}
.section_one2{
	width: 3.46rem;
	height: .55rem;
	margin: 0 auto;
	display: -webkit-flex;
	-webkit-justify-content: space-between;
	border-bottom: 1px solid #e6e1e1;
}
.section_one2 a h2{
	font-size:.14rem;
	color:black;
	display: block;
	margin-top: .1rem;
	text-align: center;
}
.section_one2 a span{
	font-size:.1rem;
	color:#9e9e9e;
	display: block;
	padding-bottom: .1rem;
}
.section_one2 a:nth-child(1){
	margin-left: .13rem;
}
.section_one2 a:nth-child(3){
	margin-right: .4rem;
}
.section_one3{
	margin-left: .15rem;
}
.section_one3 p{
	font-size:.15rem;
	color:#9e9e9e;
}
.dj{
	display: -webkit-flex;
	-webkit-align-items: center;
	margin-top: .19rem;
	margin-bottom: .17rem;
}
.dj img:nth-child(2){
	width: .37rem;
	height:.12rem;
	margin-left: .25rem;
	margin-right: .1rem;
}
.dj img:nth-child(3){
	width: .51rem;
	height:.12rem;
}
.kg{
	display: -webkit-flex;
}
.kg span{
	font-size: .15rem;
	display: block;
	margin-left: .12rem;
}
.qm{
	display: -webkit-flex;
	-webkit-align-items: center;
	margin-top: .16rem;
}
.qm p:first-child{
	margin-right: .22rem;
}
.qm p:nth-child(2){
	margin-right: 1.2rem;
}
.qm img{
	width:.1rem;
	height:.1rem;
}
</style>
