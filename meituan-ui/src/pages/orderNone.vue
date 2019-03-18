<template>
    <div>
      <order-none-header></order-none-header>
      <order-none-section></order-none-section>
      <Footer></Footer>
    </div>

</template>

<script>
    import OrderNoneHeader from "../components/orderNone/OrderNoneHeader";
    import OrderNoneSection from "../components/orderNone/OrderNoneSection";
    import Footer from "../components/index/IndexFooter";
    export default {
        name: "orderNone",
      components: {Footer, OrderNoneSection, OrderNoneHeader}
    }
</script>

<style>
  @import "../assets/publicwhite.css";

</style>
