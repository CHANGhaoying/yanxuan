<template>
    <div class="cart">
        <section>
            <p>购物车</p>
            <div class='kong' v-show='!list'>
                <img src="../assets/images/cart_02.jpg" alt="">
                <p>去添加点什么吧</p>
            </div>
            <div class='you' v-show='list'>
                <ol>
                    <li v-for="(i,index) in list" :key = 'index' 
                        @touchmove='move(index)' 
                        @touchend='end'
                        @touchstart='start(index)'
                        :style='{transform: (INdex === index) && trans}'>
                        <p><i class='iconfont icon-gouxuan'></i></p>
                        <p><img :src="i.pic" alt=""></p>
                        <dl>
                            <dt>{{i.name}}</dt>
                            <dd><small>{{i.characteristic}}</small></dd>
                            <dt>
                                <span>￥{{i.originalPrice}}</span>
                                <b>
                                    <button>-</button>
                                    <input type="text" value='1'>
                                    <button>+</button>
                                </b>
                            </dt>
                        </dl>
                        <s ref='del'>删除</s>
                    </li>
                    
                </ol>
            </div>
            <p>猜你喜欢</p>
            <ul>
                <li>
                    <img src="../assets/images/5.jpg" alt="">
                    <p>清欢严选商城小程序端</p>
                    <p><span>￥299</span><span>已售358</span></p>
                    <p>全场模板使用优惠券立减88元</p>
                </li>
                <li>
                    <img src="../assets/images/3.jpg" alt="">
                    <p>清欢严选商城小程序端</p>
                    <p><span>￥299</span><span>已售358</span></p>
                    <p>全场模板使用优惠券立减88元</p>
                </li>
                <li>
                    <img src="../assets/images/5.jpg" alt="">
                    <p>清欢严选商城小程序端</p>
                    <p><span>￥299</span><span>已售358</span></p>
                    <p>全场模板使用优惠券立减88元</p>
                </li>
                <li>
                    <img src="../assets/images/3.jpg" alt="">
                    <p>清欢严选商城小程序端</p>
                    <p><span>￥299</span><span>已售358</span></p>
                    <p>全场模板使用优惠券立减88元</p>
                </li>
            </ul>
        </section>
        <footer>
            <Foot></Foot>
        </footer>
    </div>
</template>
<script>
import Foot from '@/components/foot'
export default {
    components:{
        Foot
    },
    data() {
        return {
            list: sessionStorage.getItem('cartData') ? JSON.parse(sessionStorage.getItem('cartData')) : '',
            X: 0, 
            x1: 0,
            INdex: null,
            width: 0
        }
    },
    mounted() {
        console.log(this.list)
    },
    computed:{
        trans() {
            return 'translateX('+this.X+'px)'
        }
    },
    methods: {
        start(index) {
            let ev = window.event
            this.x1 = ev.changedTouches[0].clientX
           
            //console.log(window.getComputedStyle(document.documentElement)["fontSize"])
            let px = window.getComputedStyle(document.documentElement)["fontSize"]
            this.width = px.slice(0,px.length-2)*2.3;
            //console.log(this.width)
            //this.width = this.$refs.del[0].clientWidth
            //console.log(this.$refs.del[0].clientWidth)

            if(this.INdex !== null && this.INdex !== index){
                this.X = 0
            }
            
        },
        move(index) {
            //console.log(ev.targetTouches,ev.touches,ev.changedTouches)
            this.INdex = index
            let ev = window.event
            let x = ev.changedTouches[0].clientX
            if(x-this.x1 <= 0){
                console.log('aaaa')
                if(this.X <= -this.width){
                    this.X = -this.width
                }
                else if(this.X > 0){
                    this.X = 0
                }
                else{
                    this.X = x - this.x1
                }
            }
            else{
                if(this.X < -this.width){
                    this.X = -this.width
                }
                else if(this.X >= 0){
                    this.X = 0
                }
                else{
                    this.X = x - this.x1 - this.width
                }
            }
        },
        end(ev) {
            if(this.X <= -this.width/2){
                this.X = -this.width
            }
            else{
                this.X = 0
            }
            
        },
        
    }
}
</script>
<style lang="scss" scoped>
    .you{
        ol{
            background:#f7f7f7;
            padding: 0.2rem 0;
            width: 100;
            overflow: hidden;
            li{
                border-bottom: 1.5px solid seagreen;
                margin-bottom: 0.2rem;
                display:flex;
                position: relative;
                p{
                    height: 4rem;
                    line-height: 4rem;
                    padding: 0 0.5rem 0.2rem;
                    img{
                        width:3.8rem;
                        height: 100%;
                    }
                    i{
                        font-size:0.8rem;
                    }
                }
                @mixin sandian{
                    width: 9rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;//空余不换行
                }
                dl{
                    flex:1;
                    padding: 0.2rem 0;
                    dt{
                       
                        @include sandian;
                        span{
                            color: #c66b68;
                        }
                        b{
                            display: flex;
                            
                           button{
                               font-size: 0.8rem;
                               padding: 0 0.2rem;
                               border: 0;
                               width:1rem;
                               height: 1rem;
                           }
                            input{
                                font-size: 0.6rem;
                                width: 1.6rem;
                                height: 1rem;
                                border: 1px solid #eee;
                                text-align: center;
                            }
                        }
                    }
                    dt:last-child{
                        display:flex;
                        justify-content: space-around;
                    }
                    dd{
                        @include sandian;
                        margin: 0.5rem 0;
                    }
                }
                s{
                    background: red;
                    color: #fff;
                    position: absolute;
                    text-decoration: none;
                    width: 2.3rem;
                    height: 3.8rem;
                    line-height: 3.8rem;
                    text-align: center;
                    right: -2.3rem;
                }
            }
        }
        
    }
</style>

