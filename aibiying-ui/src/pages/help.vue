<template>
    <div>
        <div class="helptop">
            <img src="/static/img/aa.jpg" alt="">
            <h1>我们能帮上什么忙吗？</h1>
            <input type="text" placeholder="搜索帮助文章">
        </div>
        <div class="helpcontent">
            <div class="helpcontenttitle">
                <span>出租帮助</span><span>旅行帮助</span>
            </div>
            <div class="helplogin">
                <h1>登录以获取个性化的帮助</h1>
                <div class="loginsearch">
                    <router-link tag="input" type="button" value="登录" class="login" to="/login"></router-link>
                    <router-link tag="input" type="button" value="注册" class="register" to="/register"></router-link>
                </div>
            </div>
            <help-list :key="index" v-for="(i,index) in data.help1" :data="i"></help-list>
        </div>
    </div>
</template>
<script>
import data from "../components/help/data/help.json"
import helpList from "../components/help/helpList"
export default {
    data(){
        return {
            data
        }
    },
    components:{
        helpList
    }
}
</script>
<style>
@import "../assets/css/help.css"
</style>
