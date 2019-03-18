<template>
    <div>
      <xiaoxi-header></xiaoxi-header>
      <xiaoxi-section></xiaoxi-section>
      <public-footer></public-footer>
    </div>
</template>

<script>
    import XiaoxiHeader from "../components/xiaoxi/XiaoxiHeader";
    import PublicFooter from "../components/PublicFooter";
    import XiaoxiSection from "../components/xiaoxi/XiaoxiSection";
    export default {
        name: "xiaoxi",
      components: {XiaoxiSection, PublicFooter, XiaoxiHeader}
    }
</script>

<style>
@import "../assets/css/public.css";
</style>
