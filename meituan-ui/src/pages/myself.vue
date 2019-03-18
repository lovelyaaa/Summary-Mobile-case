<template>
    <div>
      <myself-header></myself-header>
      <myself-section-top></myself-section-top>
      <myself-section></myself-section>
      <myself-footer></myself-footer>
    </div>
</template>

<script>
    import MyselfHeader from "../components/myself/MyselfHeader";
    import MyselfSection from "../components/myself/MyselfSection";
    import Footer from "../components/index/IndexFooter";
    import MyselfSectionTop from "../components/myself/MyselfSectionTop";
    import MyselfFooter from "../components/myself/MyselfFooter";
    export default {
        name: "myself",
      components: {MyselfFooter, MyselfSectionTop, MyselfSection, MyselfHeader}
    }
</script>

<style>
  @import "../assets/public.css";
  body{
    background-color: #60b9d0;
  }

</style>
