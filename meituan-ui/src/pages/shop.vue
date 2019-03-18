<template>
    <div>
      <shop-header></shop-header>
      <shop-section></shop-section>
      <shop-footer></shop-footer>
    </div>
</template>

<script>
    import ShopHeader from "../components/shop/ShopHeader";
    import ShopSection from "../components/shop/ShopSection";
    import Footer from "../components/index/IndexFooter";
    import ShopFooter from "../components/shop/ShopFooter";
    export default {
        name: "shop",
      components: {ShopFooter, ShopSection, ShopHeader},
    }
</script>

<style>
@import "../assets/publicwhite.css";

</style>
