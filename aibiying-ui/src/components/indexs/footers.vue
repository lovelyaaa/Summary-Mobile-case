<template>
    <div class="footer">
        <ul class="zhong">
            <li>中文（简体）</li>
            <li>CNY 人民币</li>
        </ul>
        <div class="foot-con">
            <ul class="foot-ul foot-ul-left">
                <li><router-link to="../../login">注册/登录</router-link></li>
                <li><router-link to="/help">帮助</router-link></li>
                <li><a href="#">条款</a></li>
            </ul>
            <ul class="foot-ul foot-ul-right">
                <li><a href="#">下载应用</a></li>
                <li><a href="#">网站地图</a></li>
                <li><a href="#">隐私政策</a></li>
            </ul>
        </div>
        <footer>
            <img src="/../static/img/11.jpg" alt="">
            <div class="xiazaiapp">
                <a href="javascript:;">立即下载爱彼迎APP</a>
                <p>随时随地探索发现、预订住宿</p>
            </div>
            <p class="yingyon"><a href="javascript:;">下载应用</a></p>
        </footer>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    footer{
        width:100%;
        height:.56rem;
        line-height: .56rem;
        position:fixed;
        left: 0;
        bottom: 0;
        z-index: 3;
        border-top: 1px solid #e4e4e4;
        background: #fff;
        padding-left: 2%;
        box-sizing: border-box;
    }
    footer img{
        width: .32rem;
        height: .32rem;
        margin: 3%;
        float: left;
    }
    footer .xiazaiapp{
        float: left;
        width: 43%;
        height: .56rem;
        padding-top: 3%;
    }
    footer .xiazaiapp a{
        font-size: 12px;
        color:#484848;
        line-height: 16px;
        font-weight: 600;
        display: block;
    }
    footer .xiazaiapp p{
        font-size: 11px;
        line-height: 16px;
        font-weight: 300;
        color:#484848;
    }
    footer .yingyon{
        float: right;
        width: 25%;
        height: .56rem;
        line-height: .56rem;
        text-align: center;
    }
    footer .yingyon a{
        display: block;
        font-size: 14px;
        color: #FF5A5F;
        font-weight: 600;
    }
</style>
