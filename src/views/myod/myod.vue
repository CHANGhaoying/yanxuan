<template>
    <div class="mainorder">
      <div class="samehead">
        <span @click="back"><router-link to="/personal" class="iconfont icon-fanhui"></router-link></span>
        <p class="samehead-title">我的订单</p>
      </div>
      <ul class="mainorder-nav">
        <li>待付款</li>
        <li>待发货</li>
        <li>待收货</li>
        <li @click='pj'>待评价</li>
        <li>已完成</li>
      </ul>
      <div class="mainorder-body">
        <div class="mainorder-body-center">
          <!-- <router-view></router-view> -->
          <ul class="daifukuan">
            <li v-for='(i,x) in odlist2' :key='x'>
              <p></p>
              <p><span>下单时间：{{i.dateAdd}}</span><a href="#">{{i.statusStr}}</a></p>
              <p>订单号:{{i.orderNumber}}</p>
              <p><a href="#"><img :src="goods[i.id][0].pic" alt=""></a>{{goods[i.id][0].goodsName}}</p>
              
              <div>
                <p>合计：￥499</p>
                <p v-if='i.statusStr==="待支付"'><span>取消订单</span><span @click="topay">立即支付</span></p>
                <p v-if='i.statusStr ==="待评价"'><span>再次购买</span><span @click='toPingjia(goods[i.id][0],i)'>去评价</span></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import myvue from '../../myvue'
  import Axios from 'axios'
  export default {
    data(){
      return{
        odlist:[],
        odlist2:[],
        goods:[]
      }
    },
     created(){
       //订单列表
       Axios.post('https://api.it120.cc/small4/order/list?token=1aa2bb23-84be-43af-a8fb-2f22fdfbf153').then(res => {
         console.log(res.data.data)
          let {data} = res.data
          this.odlist = data.orderList
          this.goods = data.goodsMap
          this.odlist2 = this.odlist
          console.log(this.odlist2)
       })
    },
    methods: {
      pj() {
        this.odlist2 = this.odlist.filter(i => {
            return i.statusStr === '待评价'
          })
        console.log(this.odlist2)
      },
      toPingjia(x,y) {
        this.$router.push('/pj')
        let obj = {a:x,b:y}
        sessionStorage.obj = JSON.stringify(obj)
        
      },
      topay(){
        this.$router.push('/pay')
      },
      back() {
        myvue.$emit('back')
      }
    }
  }
</script>

<style scoped>

</style>
