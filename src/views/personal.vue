<template>
    <div class="personal">
        <section>
            <div class='banner'>
                <img src="../assets/images/bing.jpg" alt="">
                <p>傲慢的上校<small>积分: 30</small></p>
            </div>
            <p class="news">
                <i class='iconfont icon-laba'></i>
                新上线更稳定的付费快递查询接口
            </p>
            <div class='order'> 
               
                <ol>
                    <li><i class='iconfont icon-order'></i>我的订单</li>
                    <li><i class='iconfont icon-gengduo' @click="tomyod"></i></li>
                </ol>
                <ul>
                    <li>
                        <router-link to='#'>
                            <i class='iconfont icon-qianbao'></i>
                            待付款
                        </router-link>
                    </li>
                    <li>
                        <router-link to='#'>
                            <i class='iconfont icon-fenqiwodaifahuo'></i>
                            待发货
                        </router-link>
                    </li>
                    <li>
                        <router-link to='#'>
                            <i class='iconfont icon-daishouhuo'></i>
                            待收货
                        </router-link>
                    </li>
                    <li>
                        <router-link to='/pj'>
                            <i class='iconfont icon-daipingjia' @click='go'></i>
                            待评价
                        </router-link>
                    </li>
                </ul>
                
            </div>
            <ul class="mains">
                <li>
                    <i class='iconfont icon-yue'></i>
                    我的余额
                    <small>0元</small>
                </li>
                <li>
                    <i class='iconfont icon-kanjia'></i>
                    我的砍价
                </li>
                <li>
                    <i class='iconfont icon-zhibi_renminbi_o'></i>
                    我的礼券
                </li>
                <li>
                    <i class='iconfont icon-unie601'></i>
                    我的收藏
                </li>
                <li><router-link to='/myadr'>
                    <i class='iconfont icon-qiandaozuji' @click='go'></i>
                    我的地址
                    </router-link>
                </li>
                <li>
                    <i class='iconfont icon-kefu'></i>
                    联系客服
                </li>
                
            </ul>
            <p class='ver'>清欢严选 v2.2.0</p>
        </section>
        <footer><Foot></Foot></footer>
    </div>
</template>
<script>
import Foot from '@/components/foot'
import myvue from '../myvue'
export default {
    components:{
        Foot
    },
    methods: {
        go() {
            myvue.$emit('go')
        },
        tomyod() {
            this.$router.push('/myod')
            this.go()
        }
    }
}
</script>
