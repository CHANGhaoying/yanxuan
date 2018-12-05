<template>
    <div class='tuijian'>
        <p>人气推荐<i class="iconfont icon-rightarrow"></i></p>
        <ul>
            <li v-for='(i,x) in tjList' :key='x' @click='go'>
                <router-link :to='"/detail?id="+i.id'><img :src="i.pic" alt=""></router-link>
                <p>{{i.name}}</p>
                <span>{{i.characteristic}}</span>
                <p>￥{{i.minPrice}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import myvue from '../myvue'
export default {
    computed:{
        tjList() {
            let data = this.$store.state.list
            return data.filter(i => {
                return i.recommendStatusStr === '推荐'
            })
        }
    },
    methods: {
        go() {
            myvue.$emit('go')
        }    
    },
}
</script>

