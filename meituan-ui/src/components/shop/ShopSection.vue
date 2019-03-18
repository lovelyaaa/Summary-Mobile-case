<template>
    <div>
      <shop-section-lunbotu></shop-section-lunbotu>
      <shop-section01></shop-section01>
      <shop-section01></shop-section01>
      <shop-section03></shop-section03>
      <shop-section04></shop-section04>
      <shop-section05></shop-section05>
    </div>
</template>

<script>
    import ShopSectionLunbotu from "./ShopSection/ShopSectionLunbotu";
    import ShopSection01 from "./ShopSection/ShopSection01";
    import ShopSection03 from "./ShopSection/ShopSection03";
    import ShopSection04 from "./ShopSection/ShopSection04";
    import ShopSection05 from "./ShopSection/ShopSection05";
    export default {
        name: "ShopSection",
      components: {ShopSection05, ShopSection04, ShopSection03, ShopSection01, ShopSectionLunbotu}
    }
</script>

<style scoped>

</style>
