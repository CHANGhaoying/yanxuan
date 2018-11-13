<template>
    <div class="kanjia">
        <p>全民砍价<i class="iconfont icon-rightarrow"></i></p>
        <ul>
            <li v-for="(i,x) in kanjiaList" :key='x'>
                <img :src="i.pic" alt="">
                <dl>
                    <dt>{{i.name}}</dt>
                    <dd>{{i.characteristic}}</dd>
                    <dt>
                        <p><span>￥{{i.minPrice}}</span><span>底价</span></p>
                        <p><span>￥{{i.originalPrice}}</span><span>原价</span></p>
                        <p><span>{{i.stores}}件</span><span>限量</span></p>
                    </dt>
                </dl>
            </li>
           
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            //kanjiaList:[]
        }
    },
    computed:{
        kanjiaList() {
            let data =  this.$store.state.list;
            return data.filter(i => {
                return i.kanjia == true
            })
        }
    },
    created() {
        console.log(this.$store.state.list)
        console.log(this.kanjiaList)
        /* let data =  this.$store.state.list;
        console.log(data)
        this.kanjiaList = data.filter(i => {
            return i.kanjia == true
        }) */
    },

}
</script>

