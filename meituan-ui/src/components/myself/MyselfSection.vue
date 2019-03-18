<template>
    <section>
      <myself-section01></myself-section01>
      <myself-section02></myself-section02>
      <myself-section-img></myself-section-img>
      <myself-section02></myself-section02>
    </section>
</template>

<script>
    import MyselfSection01 from "./MyselfSection/MyselfSection01";
    import MyselfSection02 from "./MyselfSection/MyselfSection02";
    import MyselfSectionImg from "./MyselfSection/MyselfSectionImg";
    export default {
        name: "MyselfSection",
      components: {MyselfSectionImg, MyselfSection02, MyselfSection01}
    }
</script>

<style>
  section{
    background-color: #FFFFFF;
    width: 100%;
    box-sizing: border-box;
    padding: 0 0.2rem;
    margin-bottom: 0;
  }
</style>
