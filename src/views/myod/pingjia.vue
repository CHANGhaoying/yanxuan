<template>
    <div class="pj">
        <router-link to='/myod'>
            <span class="iconfont icon-fanhui"></span>
        </router-link>
        <dl>
            <dt><img :src="good.pic" alt=""></dt>
            <dd>{{good.goodsName}}<br/>{{good.property}}</dd>
        </dl>
        <p>
            <textarea name="" id="" ></textarea>
        </p>
        <p>
            <button @click="sub_pj">提交评价</button>
        </p>

    </div>
</template>
<script>
import Axios from 'axios'
export default {
    name:'pj',
    data() {
        return {
            good:'',
            order:''
        }
    },
    mounted() {
        
        let obj = JSON.parse(sessionStorage.getItem('obj'))
        this.good = obj.a
        this.order = obj.b
        console.log(this.good.orderId)
        console.log(obj)
        //订单详情
        Axios.post('https://api.it120.cc/small4/order/detail?token=1aa2bb23-84be-43af-a8fb-2f22fdfbf153&id=194078').then(res => {
            console.log(res)
        })
        //评价列表
        Axios.post('https://api.it120.cc/small4/shop/goods/reputation?goodsId=99763'/* +this.good.orderId */).then(res => {
            console.log(res)
        })
        
        
        
    },
    methods:{
        sub_pj(){
            let mm = {"token": "1aa2bb23-84be-43af-a8fb-2f22fdfbf153",//登录接口获取的登录凭证
                "orderId": "194093",//数字订单号，订单接口的id，不是 orderNumber
                "reputations":[
                    {
                        "id":"217010",//订单归属的商品列表数据的id字段
                        "reputation":"2",//0 差评 1 中评 2 好评
                        "remark":"物美价廉，物超所值,啦啦啦啦啦"//评价备注，限200字符
                    }
                ]}
            let str = JSON.stringify(mm)
            let params = new URLSearchParams()
            params.append('postJsonString',str)
            
            Axios.post('https://api.it120.cc/small4/order/reputation',params).then(res => {
                console.log(res)
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .pj{
        padding: 1rem 0;
        dl{
            padding-right: 1rem;
            display: flex;
            dt{
                height: 5rem;
                width:5rem;
                margin-right: 1rem;
                img{
                    width:100%;
                    height: 100%;
                }
            }
           
        }
        p{
            text-align: center;
            margin-top: 1rem;
            textarea{
                width: 95%;
                height: 5rem;
                border-radius:5px;
                outline: none;
                padding: 3px 10px; 
            }
            button{
                width: 5rem;
                height: 2rem;
                border-radius:5px;
                border: 2px solid salmon;
                outline: 0;
                color:salmon;
                font-size: 0.8rem;
            }
        }
    }
</style>


