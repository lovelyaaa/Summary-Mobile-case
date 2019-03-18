<template>
  <div class="section01">
    <div @click="_shopClick" class="section01-box1" :index="index" v-for="(i,index) in indexSection01.indexSection01">
      <img :src="i.typeImg"/>
      <p>{{i.title}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "IndexSection01",
        props: ["indexSection01"]
      // methods:{
      //   _shopClick(1){
      //
      //   }
      // },
      // mounted() {
      //
      // }
    }
</script>

<style scoped>
  .section01{
    box-sizing: border-box;
    width: 100%;
    height: 2.32rem;
    background-color: #fff;
    padding: 0.1rem;
  }
  .section01-box1{
    width: 0.7rem;
    height: 0.77rem;
    float: left;
  }
  .section01-box1 img{
    width: 0.5rem;
    height: 0.5rem;
    margin:0 auto;
  }
  .section01-box1 p{
    font-size: 0.12rem;
    /*line-height: 0.24rem;*/
    text-align: center;
  }

</style>
