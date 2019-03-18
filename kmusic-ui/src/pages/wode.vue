<template>
<div>
  <wode-header></wode-header>
  <wode-section-one></wode-section-one>
  <wode-section-two></wode-section-two>
  <wode-section-three></wode-section-three>
  <public-footer></public-footer>
</div>
  
</template>
<script>
 import WodeHeader from "../components/wode/WodeHeader.vue"
 import WodeSectionOne from "../components/wode/WodeSectionOne.vue"
 import WodeSectionTwo from "../components/wode/WodeSectionTwo.vue"
 import WodeSectionThree from "../components/wode/WodeSectionThree.vue"
 import PublicFooter from "../components/PublicFooter.vue"
 export default{
     name:"wode",
     components:{
        "wode-header" :WodeHeader,
        "wode-section-one" :WodeSectionOne,
        "wode-section-two" :WodeSectionTwo,
        "wode-section-three" :WodeSectionThree,
        "public-footer" :PublicFooter
     }
 }
</script>
<style>
    @import "../assets/css/public.css";
</style>


