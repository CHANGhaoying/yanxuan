<template>
    <div class='tuijian'>
        <p>人气推荐<i class="iconfont icon-rightarrow"></i></p>
        <ul>
            <li v-for='(i,x) in tjList' :key='x'>
                <img :src="i.pic" alt="">
                <p>{{i.name}}</p>
                <span>{{i.characteristic}}</span>
                <p>￥{{i.minPrice}}</p>
            </li>
            <!-- <li>
                <img src="../assets/images/5.jpg" alt="">
                <p>清欢素雅就你发给体内或不能</p>
                <span>全场模板</span>
                <p>￥299</p>
            </li>
            <li>
                <img src="../assets/images/5.jpg" alt="">
                <p>清欢素雅就你发给体内或不能</p>
                <span>全场模板</span>
                <p>￥299</p>
            </li>
            <li>
                <img src="../assets/images/5.jpg" alt="">
                <p>清欢素雅就你发给体内或不能</p>
                <span>全场模板</span>
                <p>￥299</p>
            </li> -->
        </ul>
    </div>
</template>
<script>
export default {
    computed:{
        tjList() {
            let data = this.$store.state.list
            return data.filter(i => {
                return i.recommendStatusStr === '推荐'
            })
        }
    },
    beforeCreate() {    
    },
}
</script>

