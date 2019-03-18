<template>
  <footer>
    <router-link tag="a" to="/index"><img src="static/img/index-footer-01.png" alt=""><span>首页</span></router-link>
    <router-link tag="a" to="/find"><img src="static/img/index-footer-02.png" alt=""><span>发现</span></router-link>
    <router-link tag="a" to="/MyselfNone"><img src="static/img/index-footer-03.png" alt=""><span>订单</span></router-link>
    <router-link tag="a" to="/myself"><img src="static/img/index-footer-04.png" alt=""><span>我的</span></router-link>
  </footer>
</template>

<script>
    export default {
        name: "MyselfFooter"
    }
</script>

<style scoped>
  /*footer*/
  footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: .5rem;
    display: -webkit-flex;
    -webkit-align-items:center;
    background-color: #fff;
  }
  footer a{
    -webkit-flex:1;
    text-align: center;
  }
  footer img{
    width: .22rem;
    height: .22rem;
    margin:0 auto;
  }
  footer span{
    display: block;
    font-size: 10px;
    color: #666666;
  }

</style>
