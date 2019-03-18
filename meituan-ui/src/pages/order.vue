<template>
    <div class="orderBox">
      <order-header></order-header>
      <order-section></order-section>
      <Footer></Footer>
    </div>
</template>

<script>
    import OrderHeader from "../components/order/OrderHeader";
    import OrderSection from "../components/order/OrderSection";
    import Footer from "../components/index/IndexFooter";
    export default {
        name: "order",
      components: {Footer, OrderSection, OrderHeader}
    }
</script>

<style>
  @import "../assets/publicwhite.css";

</style>
