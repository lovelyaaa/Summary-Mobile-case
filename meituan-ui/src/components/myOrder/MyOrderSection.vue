<template>
    <section>
      <my-order-section01></my-order-section01>
      <my-order-section01></my-order-section01>
      <my-order-section01></my-order-section01>
      <my-order-section01></my-order-section01>
      <my-order-section01></my-order-section01>
      <my-order-section01></my-order-section01>
      <my-order-section01></my-order-section01>
      <my-order-section01></my-order-section01>
    </section>
</template>

<script>
    import MyOrderSection01 from "./MyOrderSection/MyOrderSection01";
    export default {
        name: "MyOrderSection",
      components: {MyOrderSection01}
    }
</script>

<style>
  section{
    background-color: #FFFFFF;
    margin-bottom: 0.5rem;
  }
</style>
