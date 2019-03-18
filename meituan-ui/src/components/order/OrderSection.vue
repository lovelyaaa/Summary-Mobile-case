<template>
    <section>
      <order-section01></order-section01>
      <order-section02></order-section02>
      <order-section03></order-section03>
      <order-section03></order-section03>
      <order-section03></order-section03>
      <order-section-title></order-section-title>
      <order-section04></order-section04>
      <order-section04></order-section04>
    </section>
</template>

<script>
    import OrderSection01 from "./OrderSection/OrderSection01";
    import OrderSection02 from "./OrderSection/OrderSection02";
    import OrderSection03 from "./OrderSection/OrderSection03";
    import OrderSection04 from "./OrderSection/OrderSection04";
    import OrderSectionTitle from "./OrderSection/OrderSectionTitle";
    export default {
        name: "OrderSection",
      components: {OrderSectionTitle, OrderSection04, OrderSection03, OrderSection02, OrderSection01}
    }
</script>

<style>
  section{
    margin-top: 0.43rem;
    margin-bottom: 0.5rem;
    width: 100%;
    box-sizing: border-box;
    background-color: #fafbfc;
  }
</style>
