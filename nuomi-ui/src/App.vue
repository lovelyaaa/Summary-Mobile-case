<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body,h1,h2,h3,h4,h5,h6,p,ul,ol,dl,dd,td,input,select,option,textarea{
    margin:0;
    padding:0;
  }
  html{
    font-size: 26.67vw;
  }
  html,body{
    height: 100%;
  }
body{
    height: 100%;
    display:flex;
    flex-direction: column;
    font-family:"微软雅黑";
  }
  ul,ol{
    list-style:none;
  }
  a{
    text-decoration:none;
  }
  img,span{
    border:none;
    display: block;
  }
  #app{
    width: 100%;
  }
</style>
