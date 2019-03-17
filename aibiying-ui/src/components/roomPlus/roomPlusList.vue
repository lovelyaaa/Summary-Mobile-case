<template>
    <div class="roompluscontent">
        <div class="plustitle">
            <h2>{{data.title}}</h2>
            <p class="PlusFangdong">{{data.ptitle}}</p>
        </div>
        <p class="roomplusdesc">{{data.ptitle1}}</p>
        <a href="javascript:;" class="fanyi">翻译</a>
        <ul class="plusul">
            <li>2位房客</li>
            <li>1间卧室</li>
            <li>1张床</li>
            <li>1个公共卫生间</li>
        </ul>
    </div>
</template>

<script>
export default {
    props:["data"]
}
</script>

<style>

</style>
