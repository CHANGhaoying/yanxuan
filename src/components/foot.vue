<template>
    <ol class="foot">
        <li @click='peer'>
            <router-link to='/'>
                <span class="iconfont icon-shouye"></span>
                首页
            </router-link>
        </li>
        <li @click='peer'>
            <router-link to='/fenlei'>
                <span class="iconfont icon-fenlei"></span>
                分类
            </router-link>
        </li>
        <li @click='peer'>
            <router-link to='/cart'>
                <span class="iconfont icon-gouwuche"></span>
                购物车
            </router-link>
        </li>
        <li @click='toPersonal'>
            <router-link to=''>
                <span class="iconfont icon-geren11"></span>
                个人
            </router-link>
        </li>
    </ol>
</template>

<script>
import myvue from '../myvue'
export default {
    methods:{
        peer() {
            myvue.$emit('peer')
        },
        toPersonal() {
            this.peer()
            let log = sessionStorage.getItem('log')
            if(!log) {
                if(confirm('您还没有登录，去登录？')){
                    this.$router.push('/login')
                }
                else{
                    this.$router.push('/personal')
                }
            }
        },



    }
}
</script>
   
    

