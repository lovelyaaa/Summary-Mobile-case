<template>
  <div id="by">
    <nmheader></nmheader>
    <nmSection :data="data"></nmSection>
    <Footer></Footer>
  </div>
</template>

<script>
    import data from "../api-server/data/shopping"
    import nmheader from "../components/busniessCollege/nmheader"
    import nmSection from "../components/busniessCollege/nmSection"
    import Footer from "../components/commons/Footer"
    export default {
        name: "businessCollege",
        data(){
          return {
            data
          }
        },
        components: {
        nmheader,
        nmSection,
        Footer
      }
    }
</script>

<style scoped>
  #by{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
