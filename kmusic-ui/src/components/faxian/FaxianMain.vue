<template>
  <div>
    <div class="main">
      <div class="main_left">
        <img src="../../assets/images/top1.png" alt="">
        <p>吻我</p>
        <div class="pk">
          <p><img src="../../assets/images/n1.png" alt="">11.6万</p>
          <p><img src="../../assets/images/n2.png" alt="">PK中</p>
        </div>
      </div>
      <div class="main_left">
        <img src="../../assets/images/top2.png" alt="">
        <p>超紧张！每日淘汰5名</p>
      </div>
    </div>
    <div class="main">
      <div class="main_left">
        <img src="../../assets/images/top1.png" alt="">
        <p>吻我</p>
        <div class="pk">
          <p><img src="../../assets/images/n1.png" alt="">11.6万</p>
          <p><img src="../../assets/images/n2.png" alt="">PK中</p>
        </div>
      </div>
      <div class="main_left">
        <img src="../../assets/images/top2.png" alt="">
        <p>超紧张！每日淘汰5名</p>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "FaxianMain"
    }
</script>

<style scoped>
  .main{
    width: 3.45rem;
    height: 2.3rem;
    margin:.2rem .15rem 0 .15rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
  }
  .main_left img{
    width: 1.68rem;
    height:1.68rem;
  }
  .main_left p{
    font-size: .13rem;
    color:#262626;
    display: block;
    margin-top: .1rem;
  }
  .pk{
    display: -webkit-flex;
    -webkit-align-items: center;
  }
  .pk p{
    font-size: .1rem;
    color:#c6c6c6;
    display: -webkit-flex;
    margin-right: .15rem;
  }
  .pk img{
    width: .13rem;
    height:.12rem;
    margin-top: .03rem;
    margin-right: .06rem;
  }
</style>
