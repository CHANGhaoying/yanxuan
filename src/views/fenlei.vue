<template>
    <div class='fenlei'>
        <header>
            <input type="text" placeholder="搜索商品">
            <span class='iconfont icon-magnifier'></span>
        </header>
        <section>
            <aside>
                <p :class='{active:flag}' @click='all'><b>所有分类</b></p>
                <p v-for="(i,x) in fenlei" :key='x' 
                @click='fl(i)' :class='{active:i.flag}'><b>{{i.name}}</b></p>   
            </aside>
            <div>
                <div>
                    <div>
                        <banner></banner>
                    
                    </div>
                    <ul>
                        <li v-for="(i,x) in list" :key="x">
                            <router-link to='#'>
                                <img :src="i.icon" alt="">
                                <span>{{i.name}}</span>
                            </router-link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </section>
        <footer>
            <Foot></Foot>
        </footer>
    </div>
</template>
<script>
import Axios from 'axios';
import Foot from '@/components/foot';
import Banner from '@/components/banner';
export default {
    components: {
        Foot,
        Banner
    },
    data() {
        return {
          allList: [],
          list: [],
          fenlei: [],
          flag: true,  
        }
    },
    mounted() {
        console.log(this.$store.state.list)
        Axios.get('https://api.it120.cc/small4/shop/goods/category/all').then(res => {
            let {data} = res.data
            console.log(data)
            this.allList = data;
            this.list = data;
            let FL = data.filter(i => {
                return i.level === 1;
            });
            // for(let i of FL){
            //     i.flag = false;
            //     this.fenlei.push(i)
            // }
            this.fenlei = FL.map(i => {
                i.flag = false;
                return i
            })
        })

    },
    methods:{
        fl(x) {
            this.list = this.allList.filter(i => {
                return i.type === x.type+'2'
            });
            // this.fenlei = this.fenlei.map(i => {
            //     i === x ? (i.flag = true) : (i.flag = false)
            //     return i
            // });
            for (let i of this.fenlei){
                i === x ? (i.flag = true) : (i.flag = false)
            }
            this.flag = false
        },
        all() {
            this.flag = true
            this.list = this.allList
            for (let i of this.fenlei){
                i.flag = false
            }
        }
    }
}

</script>



