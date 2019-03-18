<template>
    <div>
      <tuijian-video></tuijian-video>
      <tuijian-header></tuijian-header>
      <tuijian-daohang></tuijian-daohang>
      <tuijian-footer></tuijian-footer>
    </div>
</template>

<script>
    import TuijianVideo from "../components/tuijian/TuijianVideo";
    import TuijianHeader from "../components/tuijian/TuijianHeader";
    import TuijianDaohang from "../components/tuijian/TuijianDaohang";
    import TuijianFooter from "../components/tuijian/TuijianFooter";
    export default {
        name: "tuijian",
      components: {TuijianFooter, TuijianDaohang, TuijianHeader, TuijianVideo}
    }
</script>

<style>
@import "../assets/css/public.css";
</style>
