<template>
  <header>
    <div class="header_one">
      <router-link to="diange"><img src="../../assets/images/h5.png" alt=""></router-link>
      <h1>伴奏</h1>
      <div class="last">
        <img src="../../assets/images/h6.png" alt="">
        <router-link tag="a" to="/dangqian"><img src="../../assets/images/h7.png" alt=""></router-link>
      </div>
    </div>
    <div class="dt">
      <p>已点伴奏</p>
      <p>练唱列表</p>
    </div>
  </header>
</template>

<script>
    export default {
        name: "BanzouHeader"
    }
</script>

<style scoped>
  header{
    width: 100%;
    position: fixed;
    top: 0;
  }
  .header_one{
    width: 100%;
    height: .53rem;
    background: white;
    display: -webkit-flex;
    -webkit-align-items: center;
    -webkit-justify-content: space-between;
  }
  .header_one h1{
    font-size: .17rem;
    font-weight: 100;
    color: #262626;
    margin-left: .4rem;
  }
  .header_one img{
    width: .25rem;
    height:.2rem;
  }
  .header_one img:first-child{
    margin-left: .1rem;
  }
  .last img:last-child{
    margin-left: .14rem;
    margin-right: .13rem;
  }
  .last{
    display: -webkit-flex;
  }
  .dt{
    height: .4rem;
    background: white;
    border-top: 2px solid #c6c6c6;
    border-bottom: 1px solid #e6e1e1;
    display: -webkit-flex;
    -webkit-justify-content: space-around;
    -webkit-align-items: center;
  }
  .dt p{
    font-size: .13rem;
    color:#3d3d3d;
    padding:.13rem 0  .12rem  0;
  }
  .dt p:nth-child(1){
    color: #de5b4c;
    background-image: url(../../assets/images/line1.png);
    background-size: .61rem;
    background-repeat: no-repeat;
    background-position: bottom center;
  }
  .dt p:hover{
    color: #de5b4c;
    background-image: url(../../assets/images/line1.png);
    background-size: .61rem;
    background-repeat: no-repeat;
    background-position: bottom center;
  }
</style>
