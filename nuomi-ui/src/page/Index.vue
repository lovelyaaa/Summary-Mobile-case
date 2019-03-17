<template>
  <div id="body">
    <nmHeader></nmHeader>
    <nmSection :data="data"></nmSection>
    <Footer></Footer>
  </div>
</template>

<script>
  import data from "../api-server/data/index"
  import nmHeader from "../components/bgIndex/nmHeader"
  import nmSection from "../components/bgIndex/nmSection"
  import Footer from "../components/commons/Footer"
  export default {
    name: "Index",
    components:{
      nmHeader,
      nmSection,
      Footer
    },
    data(){
      return {
        data
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  html,body{
    height:100%;
  }
  #body {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
