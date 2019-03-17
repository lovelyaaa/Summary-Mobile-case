<template>
    <div class="login-container">
        <div class="box">
            <headers></headers>
            <register-content></register-content>
            <footers></footers>
        </div>
    </div>
</template>
<script>
import "../assets/css/login.css"
import headers from "../components/register/headers"
import footers from "../components/register/footers"
import registerContent from "../components/register/registerContent"
export default {
    components:{
        headers,
        footers,
        registerContent
    }
}
</script>
<style scoped>
    .login-container{
        height: 100%;
        width: 100%;
    }
</style>
