<template>
    <div>
      <my-order-header></my-order-header>
      <my-order-nav></my-order-nav>
      <my-order-section></my-order-section>
      <myorder-footer></myorder-footer>
    </div>
</template>

<script>
    import MyOrderHeader from "../components/myOrder/MyOrderHeader";
    import MyOrderNav from "../components/myOrder/MyOrderNav";
    import MyOrderSection from "../components/myOrder/MyOrderSection";
    import Footer from "../components/index/IndexFooter";
    import MyorderFooter from "../components/myOrder/MyorderFooter";
    export default {
        name: "myOrder",
      components: {MyorderFooter, MyOrderSection, MyOrderNav, MyOrderHeader}
    }
</script>

<style>
@import "../assets/publicwhite.css";
body{
  font-family:"微软雅黑";
  background-color: #f0efed;
}
</style>
