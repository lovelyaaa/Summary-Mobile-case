<template>
  <div class="daohang">
    <img src="../../assets/images/yo1.png" alt=""><p>65</p>
    <img src="../../assets/images/yo2.png" alt=""><p>378</p>
    <img src="../../assets/images/yo3.png" alt=""><p>428</p>
    <img src="../../assets/images/yo4.png" alt=""><p>1万</p>
    <img src="../../assets/images/yo5.png" alt=""><p>拍同款</p>
  </div>
</template>

<script>
    export default {
        name: "TuijianDaohang"
    }
</script>

<style scoped>
  .daohang{
    width: .68rem;
    height: 3.33rem;
    position: fixed;
    right: 0;
    bottom: .8rem;
  }
  .daohang img{
    width: .3rem;
    height: .25rem;
    margin:0 auto;
  }
  .daohang p{
    font-size: .13rem;
    color:white;
    text-align: center;
    margin-top: .06rem;
    margin-bottom: .24rem;
  }
</style>
