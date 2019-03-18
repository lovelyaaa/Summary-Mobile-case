<template>
  <div class="ter">
    <footer>
      <router-link tag="a" to="/guanzhu"><img src="../../assets/images/f01.png" alt=""/><span>首页</span></router-link>
      <router-link tag="a" to="/faxian"><img src="../../assets/images/f02.png" alt=""/><span>发现</span></router-link>
      <router-link tag="a" to="/diange"><span class="sp">点歌</span></router-link>
      <router-link tag="a" to="/xiaoxi"><img src="../../assets/images/f03.png" alt=""/><span>消息</span></router-link>
      <router-link tag="a" to="/wode"><img src="../../assets/images/f04.png" alt=""/><span>我的</span></router-link>
      <div class="photo">
        <router-link to="/diange"><img src="../../assets/images/photo.png"/></router-link>
      </div>
    </footer>
  </div>
</template>

<script>
    export default {
        name: "TuijianFooter"
    }
</script>

<style scoped>
  .ter{
    width: 100%;
    position: fixed;
    bottom: 0;
  }
  footer{
    width: 100%;
    height: .49rem;
    /*box-shadow: 0 -3px 5px #eeeeee;*/
    display: -webkit-flex;
    -webkit-align-items:center;
    position: relative;
  }
  footer a{
    -webkit-flex:1;
    text-align: center;
  }
  footer a img{
    display: block;
    width: .3rem;
    height: .29rem;
    margin:0 auto;
  }
  footer .photo{
    width: .4rem;
    height: .4rem;
    /*border:6px solid #ffffff;*/
    /*box-shadow: 0 -3px 3px #e9e9e9;*/
    border-radius: 50%;
    position: absolute;
    left: 50%;
    margin-left: -19px;
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
    color: white;
    font-size: 10px;
    display: block;
  }
  footer a .sp{
    display: block;
    font-size: 10px;
    margin-top: .25rem;
  }
</style>
