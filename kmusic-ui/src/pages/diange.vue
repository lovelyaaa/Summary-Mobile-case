<template>
  <div>
    <diange-header></diange-header>
    <public-footer></public-footer>
    <diange-section></diange-section>
  </div>

</template>

<script>
    import DiangeHeader from "../components/diange/DiangeHeader";
    import PublicFooter from "../components/PublicFooter";
    import DiangeSection from "../components/diange/DiangeSection";
    export default {
        name: "diange",
      components: {DiangeSection, PublicFooter, DiangeHeader}
    }
</script>

<style>
  @import "../assets/css/public.css";
</style>
