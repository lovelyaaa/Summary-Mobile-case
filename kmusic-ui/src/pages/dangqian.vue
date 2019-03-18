<template>
    <div>
      <dangqian-header></dangqian-header>
      <dangqian-section></dangqian-section>
      <dangqian-footer></dangqian-footer>
    </div>
</template>

<script>
    import DangqianHeader from "../components/dangqian/DangqianHeader";
    import DangqianSection from "../components/dangqian/DangqianSection";
    import DangqianFooter from "../components/dangqian/DangqianFooter";
    export default {
        name: "dangqian",
      components: {DangqianFooter, DangqianSection, DangqianHeader}
    }
</script>

<style>
@import "../assets/css/public.css";
</style>
