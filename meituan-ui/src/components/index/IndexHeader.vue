<template>
    <div>
      <header>
        <div class="header-left">
          <span>西安</span>
          <img src="/static/img/index-header01.png"/>
        </div>
        <div class="header-cen">
          <img src="/static/img/index-header03.png"/>
          <span>瑞新咖啡coffee(满100减10)</span>
        </div>
        <div class="header-right">
          <img src="/static/img/index-header02.png"/>
        </div>
      </header>
    </div>
</template>

<script>
    export default {
        name: "IndexHeader"
    }
</script>

<style scoped>
  @import "../../assets/public.css";
  header{
    z-index: 99;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.4rem;
    padding-top: 0.12rem;
    background-color: #e1573f;
    display: -webkit-flex;
    -webkit-justify-content: space-around;
  }
  .header-left{
    display: -webkit-flex;
    padding-top: 0.06rem;
  }
  .header-left span{
    font-size: 0.14rem;
    color: #fff;
    white-space: nowrap;
  }
  .header-left img{
    width: .14rem;
    height: .14rem;
  }
  .header-cen{
    width: 2.5rem;
    height: 0.38rem;
    background-color: #d4816e;
    display: -webkit-flex;
    -webkit-justify-content: -webkit-flex-start;
    border-radius: 0.1rem;
    text-align: center;
  }
  .header-cen img{
    width: .12rem;
    height: .12rem;
    margin: 0.14rem 0.12rem;
  }
  .header-cen span{
    color: #f2dad4;
    font-size: 0.14rem;
    line-height: 0.38rem;
  }
  .header-right img{
    width: .26rem;
    height: .26rem;
  }
</style>
