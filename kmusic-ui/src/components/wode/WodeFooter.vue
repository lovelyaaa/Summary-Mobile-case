<template>
    <footer>
        <a href="javascript:;"><img src="../../assets/images/f1.png" alt=""/><span>首页</span></a>
        <a href="javascript:;"><img src="../../assets/images/f2.png" alt=""/><span>发现</span></a>
        <a href="javascript:;"><span class="sp">点歌</span></a>
        <a href="javascript:;"><img src="../../assets/images/f3.png" alt=""/><span>消息</span></a>
        <a href="javascript:;"><img src="../../assets/images/f4.png" alt=""/><span>我的</span></a>
        <div class="photo">
            <img src="../../assets/images/photo.png"/>
        </div>
    </footer>
</template>
<script>
export default {
    name:"Footer",
}
</script>
<style scoped>
footer{
	width: 100%;
	height: .49rem;
	box-shadow: 0 -3px 5px #eeeeee;
	display: -webkit-flex;
	-webkit-align-items:center;
	position: relative;
	position: fixed;
	bottom: 0;
}
footer a{
	-webkit-flex:1;
	text-align: center;
}
footer a img{
	display: block;
	width: .27rem;
	height: .23rem;
	margin:0 auto;
}
footer .photo{
	width: .4rem;
	height: .4rem;
	border:6px solid #ffffff;
	box-shadow: 0 -3px 3px #e9e9e9;
	border-radius: 50%;
	position: absolute;
	left: 50%;
	margin-left: -25px;
	top: -20px;
	display: -webkit-flex;
	-webkit-justify-content:center;
	-webkit-align-items:center;
	background: #e64b50;
}
footer .photo img{
	width: .25rem;
	height: .27rem;
}
footer a span{
	color: #6b6b6b;
	font-size: 10px;
	display: block;
}
footer a .sp{
	display: block;
	font-size: 10px;
	margin-top: .25rem;
}
</style>
