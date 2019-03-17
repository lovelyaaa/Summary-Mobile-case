<template>
    <header class='lk'>
        <img src="../../assets/img/c.png" class="img1">
        <img src="../../assets/img/private1.jpg" class="img2">
        <div class="swiper-container wk">
            <div class="swiper-wrapper wkk">
                <router-link to="/collections" class="swiper-slide ws"><img src="../../assets/img/a.jpg"><p class="p1">爱彼迎新春特惠</p><p class="p2">缤纷礼包，尽兴旅行</p> <p class="p3"><a href="#">领千元大礼包</a></p></router-link>
                <router-link to="/collections" class="swiper-slide ws"><img src="../../assets/img/4.jpg"><p class="p1">亲子清迈行</p><p class="p2">共享亲密的家庭时光</p> <p class="p3 p4"><a href="#">查看合集</a></p></router-link>
                <router-link to="/collections" class="swiper-slide ws"><img src="../../assets/img/b.jpg"><p class="p1">住进旧时光</p><p class="p2">在民宿中重拾历史</p> <p class="p3 p4"><a href="#">查看指南</a></p></router-link>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="bg"></div>
        <div class="loginbg">
            <div class="loginbgbox">
                <router-link to="/login" class="login-register">注册/登录</router-link>
                <router-link to="/" tag="img" src="/../static/img/bigperson1.jpg" class="bigperson"></router-link>
            </div>
            <ul class="loginul">
                <li><a href="#"><img src="/../static/img/13.jpg" alt="">下载爱彼迎APP</a></li>
                <li><a href="#"><img src="/../static/img/14.jpg" alt="">语言与货币</a></li>
                <li><a href="#"><img src="/../static/img/17.jpg" alt="">帮助</a></li>
            </ul>
        </div>
        <input type="text" placeholder="搜 [北京] 试试">
    </header>
</template>
<script>
import $ from "jquery"
export default {
    mounted(){
        $(".img2").click(function(){
            $(".loginbg").css("display","block")
            $(".bg").css("display","block")
        })
        $(".bg").click(function(){
            $(".loginbg").css("display","none")
            $(".bg").css("display","none")
        })
    },
    methods:{
        
    }
}
</script>
<style scoped>
    .bg{
        width:25%;
        background: #000;
        opacity: .6;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: 22;
        display:none;
    }
    .loginbg{
        width: 75%;
        background: #fff;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 22;
        display:none;
        padding: 34px 24px;
        box-sizing: border-box;
    }
    .loginbgbox{
        z-index: 25;
        width: 100%;
        display: flex;
        margin-bottom: 16%;
    }
    .login-register{
        font-size: 16px;
        color:#008489;
        display: block;
        margin-top: 12px;
        margin-right: 48%;
    }
    .bigperson{
        width: .48rem;
        height: .48rem;
    }
    .loginul li a{
        font-size: 16px;
        color:#484848;
        display: flex;
        margin-bottom: 16%;
    }
    .loginul li a img{
        width: .2rem;
        height: .2rem;
        margin-right: 6%;
    }
</style>
