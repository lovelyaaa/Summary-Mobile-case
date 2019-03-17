<template>
    <div class="canguan tingche">
        <div class="canguantitle">
            <h2>便利设施</h2>
        </div>
        <ul class="tingcheul" :key="index" v-for="(i,index) in data.content">
            <li :key="ik" v-for="(con,ik) in i.item">
                <img :src="con.imgs" alt="">
                <p>{{con.title}}</p>
            </li>
        </ul>
        <p><a href="javascript:;">显示所有13项便利设施</a></p>
    </div>
</template>
<script>
export default {
    props:["data"]
}
</script>
<style>

</style>
