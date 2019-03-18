<template>
    <header>
        <div class="header_one">
            <div class="header_left">
                <a href="#"><img src="../../assets/images/h1.png" alt=""/></a>
            </div>
            <div class="header_right">
                <img src="../../assets/images/h2.png" alt=""/>
              <router-link tag="a" to="/dangqian"><img src="../../assets/images/h3.png" alt=""></router-link>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name:"WodeHeader",
}
</script>
<style scoped>
  body{
    background: #eeeeee;
  }
header{
	width: 100%;
    height: .53rem;
    background: #bc4030;
    position: fixed;
    top: 0;
    z-index: 10;
}
.header_one{
	display:-webkit-flex;
	-webkit-justify-content:space-between;
	-webkit-align-items:center;
	padding-top: .15rem;
}
.header_left a{
	display:-webkit-flex;
}
.header_left img{
	width:.25rem;
	height:.2rem;
	padding-left:.15rem;
}
.header_right{
	display:-webkit-flex;
}
.header_right img:first-child{
	width:.25rem;
	height: .2rem;
}
.header_right img:last-child{
	width:.25rem;
	height: .2rem;
	padding-left:.14rem;
	padding-right:.15rem;
}
</style>
