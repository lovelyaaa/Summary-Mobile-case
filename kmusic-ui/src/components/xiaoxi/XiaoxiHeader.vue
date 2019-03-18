<template>
  <header>
    <div class="header_one">
      <h1>消息</h1>
      <router-link tag="a" to="/dangqian"><img class="last" src="../../assets/images/h3.png" alt=""></router-link>
    </div>
  </header>
</template>

<script>
    export default {
        name: "XiaoxiHeader"
    }
</script>

<style scoped>
  header{
    width: 100%;
    position: fixed;
    top:0;
  }
  .header_one{
    width: 100%;
    height: .53rem;
    background: #bc4030;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
  }
  .header_one h1{
    font-size: .25rem;
    color: white;
    padding: .1rem .17rem 0;
  }
  .last{
    width: .25rem;
    height:.2rem;
    margin-top: .17rem;
    margin-right: .15rem;
  }
</style>
