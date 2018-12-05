<template>
    <ul class="mynav">
        <li><i class="iconfont icon-qiandaozuji"></i>签到</li>
        <li><i class="iconfont icon-huangguan"></i>礼券</li>
        <li @click='tokj'><i class="iconfont icon-baozhuanhuan"></i>砍价</li>
        <li><i class="iconfont icon-youpinjiaju_danxian_diaodeng"></i>专栏</li>
    </ul>
</template>
<script>
import myvue from '../myvue'
export default {
    name:'kanjia',
    methods: {
        tokj() {
            this.$router.push('/kanjia')
            myvue.$emit('go')
        }
    }
}
</script>

