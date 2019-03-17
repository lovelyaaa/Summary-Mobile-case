<template>
  <div class="by">
    <nmHeader></nmHeader>
    <nmSection :data="data"></nmSection>
    <Footer></Footer>
  </div>
</template>

<script>
  import data from "../../src/api-server/data/shopping"
  import  nmHeader from "../components/shoppingMall/nmHeader"
  import  nmSection from "../components/shoppingMall/nmSection"
  import Footer from "../components/commons/Footer"
    export default {
        name: "shoppingMall",
        data(){
          return {
            data
          }
        },
        components: {
          nmHeader,
          nmSection,
          Footer
        }
    }
</script>

<style scoped>
  .by{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
