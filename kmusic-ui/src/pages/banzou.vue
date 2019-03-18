<template>
<div>
  <banzou-header></banzou-header>
  <banzou-section></banzou-section>
</div>
</template>

<script>
    import BanzouHeader from "../components/banzou/BanzouHeader";
    import BanzouSection from "../components/banzou/BanzouSection";
    export default {
        name: "banzou",
      components: {BanzouSection, BanzouHeader}
    }
</script>

<style>
@import "../assets/css/public.css";
</style>
