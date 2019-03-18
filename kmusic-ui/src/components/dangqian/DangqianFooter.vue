<template>
    <div>
      <footer>
        <a href="javascript:;"><img src="../../assets/images/xi1.png" alt=""/></a>
        <a href="javascript:;"><img src="../../assets/images/xi2.png" alt=""/></a>
        <a href="javascript:;"><img src="../../assets/images/xi3.png"></a>
        <a href="javascript:;"><img src="../../assets/images/xi4.png" alt=""/></a>
        <a href="javascript:;"><img src="../../assets/images/xi5.png" alt=""/></a>
      </footer>
      <div class="container">
        <div class="bar">
            <span class="bar-unfill">
                <span class="bar-fill"></span>
            </span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DangqianFooter"
    }
</script>

<style scoped>
  footer{
    width: 100%;
    height: .68rem;
    box-shadow: 0 -3px 5px #eeeeee;
    display: -webkit-flex;
    -webkit-align-items:center;
    position: fixed;
    bottom: 0;
  }
  footer a{
    -webkit-flex:1;
    text-align: center;
  }
  footer a img{
    display: block;
    width: .27rem;
    height: .23rem;
    margin:0 auto;
  }
  .container {
    width:100%;
    position: fixed;
    bottom: .68rem;
  }
  .bar-unfill {
    height:3px;
    display:block;
    background:gray;
    width:100%;
    border-radius:8px
  }
  .bar-fill {
    height:5px;
    display:block;
    background:#45c9a5;
    width:0;
    border-radius:8px;
    -webkit-transition:width .8s ease;
    -moz-transition:width .8s ease;
    transition:width .8s ease;
    -webkit-animation:progressbar 7s infinite;
    animation:progressbar 7s infinite
  }
  @-webkit-keyframes progressbar {
    from {
      width:0
    }
    to {
      width:100%
    }
  }
  /* Standard syntax */
  @keyframes progressbar {
    from {
      width:0
    }
    to {
      width:100%
    }
  }
</style>
