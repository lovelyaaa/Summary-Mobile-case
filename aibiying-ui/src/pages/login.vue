<template>
    <div class="login-container">
        <div class="box">
            <headers></headers>
            <login-list></login-list>
            <footers></footers>
        </div>
    </div>
</template>
<script>
import "../assets/css/login.css";
import headers from "../components/login/headers"
import footers from "../components/login/footers"
import loginList from "../components/login/loginList"
export default {
    components:{
        headers,
        footers,
        loginList
    }
}
</script>
<style scoped>  
    .login-container{
        height: 100%;
        width: 100%;
    }
</style>



