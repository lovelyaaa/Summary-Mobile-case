<template>
    <div>
      <bang-header></bang-header>
      <bang-section></bang-section>
      <public-footer></public-footer>
    </div>
</template>

<script>
    import BangHeader from "../components/bang/BangHeader";
    import BangSection from "../components/bang/BangSection";
    import PublicFooter from "../components/PublicFooter";
    export default {
        name: "bang",
      components: {PublicFooter, BangSection, BangHeader}
    }
</script>

<style scoped>
@import "../assets/css/public.css";
</style>
