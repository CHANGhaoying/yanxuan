<template>
  <div class="sureorder">
    <div class="samehead">
      <!--<router-link to="/detail" class="iconfont icon-arrow-right leftjiantou"></router-link>-->
      <span  @click='back'><router-link :to="'/detail?id='+info.id" class="iconfont icon-fanhui"></router-link></span>
      <p class="samehead-title">确认订单</p>
    </div>
    <div class="sureorder-body">
      <!--<h5 ><span class="add">+</span>新增收货地址<span class="right">></span></h5>-->
      <ul>
        <li><router-link to='/myadr'><span class="iconfont icon-weizhi"></span></router-link></li>
        <li><p>{{Adr.linkMan}} {{Adr.mobile}}</p><p>{{Adr.provinceStr}}{{Adr.cityStr}}{{Adr.address}}</p></li>
        <li><router-link to="/" class="iconfont icon-arrow-right-copy-copy"></router-link></li>
      </ul>
      <p class="kongyu"></p>
      <h2>商品列表</h2>
      <ul class="ull">
        <li class="i1">
          <img :src="info.pic" alt="">
        </li>
        <li class="i2">
          <span>{{info.name}}</span>
          
        </li>
        <li class="i3">
          <span>￥{{orderData.price}}</span>
          <p>x 1</p>
        </li>
      </ul>
      <dl>
        <dt>
          <span>配送方式</span>
          <span>包邮</span>
        </dt>
        <dt>
          <span>备注</span>
          <input type="text" placeholder="如需备注请输入">
        </dt>
        <dt>
          <span>商品金额</span>
          <span>￥{{orderData.price}}</span>
        </dt>
      </dl>
    </div>
    <div class="sureorder-foot" @click='go'>
      <span>合计：￥{{orderData.price}}</span>
  
      <router-link to="/pay"><span @click='pay'>提交订单</span></router-link>
      
    </div>
  </div>
</template>

<script>
    import Axios from 'axios';
    import myvue from '../../myvue';
    export default {
        name: "sureorder",
      data(){
          return{
            info: JSON.parse(sessionStorage.getItem('info')),
            orderData:[],
            Adr:[]
          }
      },
      created(){
        
        let str = JSON.parse(sessionStorage.getItem('size')).join()//this.$store.state.size.join()
        //获取商品价格/信息
        this.axios.post('https://api.it120.cc/small4/shop/goods/price?goodsId='+this.info.id+'&propertyChildIds='+str).then(res => {
          console.log(res)
          let { data } = res.data
          this.orderData = data
          
        })

        //获取默认地址
        Axios.post('https://api.it120.cc/small4/user/shipping-address/default?token=1aa2bb23-84be-43af-a8fb-2f22fdfbf153').then(res => {
          this.Adr = res.data.data
          
        })
      },
      methods:{
        back() {
          myvue.$emit('back')
        },
        go(){
          myvue.$emit('go')
        },
        pay() {
          //创建订单
          let id = this.orderData.goodsId
          let pc = this.orderData.propertyChildIds
          let params = new URLSearchParams()
            params.append('token','1aa2bb23-84be-43af-a8fb-2f22fdfbf153')
            params.append('goodsJsonStr',"[{'goodsId':'"+id+"','number':'1','propertyChildIds':'"+pc+"','logisticsType':'0'}]")
            Axios.post('https://api.it120.cc/small4/order/create',params
            ).then(res => {
              let {data} = res.data
              sessionStorage.orderNum = data.orderNumber
              sessionStorage.orderId = data.id
              
            })
        }
      }
    }
</script>

<style scoped>

</style>
