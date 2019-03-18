<template>
    <div>
      <myself-header></myself-header>
      <myself-none-section-top></myself-none-section-top>
      <myself-section class="myself-section"></myself-section>
      <myself-none-footer></myself-none-footer>
    </div>
</template>

<script>
    import MyselfHeader from "../components/myself/MyselfHeader";
    import MyselfSection from "../components/myself/MyselfSection";
    import MyselfNoneSectionTop from "../components/myselfNone/MyselfNoneSectionTop";
    import Footer from "../components/index/IndexFooter";
    import MyselfNoneFooter from "../components/myselfNone/MyselfNoneFooter";
    export default {
        name: "myselfNone",
      components: {MyselfNoneFooter, MyselfNoneSectionTop, MyselfSection, MyselfHeader}
    }
</script>

<style>
  @import "../assets/public.css";
  body{
    background-color: #60b9d0;
  }
  .sectionImg{
    display: none;
  }
  .myself-section{
    padding-bottom: 1rem;
  }
</style>
