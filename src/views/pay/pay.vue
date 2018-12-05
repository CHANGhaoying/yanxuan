<template>
    <div class="surefukuan">
      <div class="samehead">
        <span @click='back' class="iconfont icon-fanhui"></span>
        <p class="samehead-title">确认付款</p>
      </div>
      <div class="surefukuan-body">
       <ul>
         <li><span class="iconfont icon-yue"></span></li>
         <li><p>商品总额：<span>￥1</span></p><p>订单号：{{orderNum}}</p></li>
       </ul>
        <ul>
          <li><span class="iconfont icon-qiandaozuji"></span></li>
          <li>
            <p>常好英 13017520322</p>
            <p>河南省安阳市安阳县国务二院</p>
          </li>
        </ul>
      </div>
      <p class="surefukuan-foot" @click='topay'>微信支付 ￥1</p>
    </div>
</template>

<script>
  import Axios from 'axios'
  import myvue from '../../myvue';
    export default {
        name: "pay",
        data() {
          return {
            orderNum: sessionStorage.getItem('orderNum'),
            orderId: sessionStorage.getItem('orderId')
          }
        },
        mounted() {
        },
        methods: {
          toorder() {
            //创建订单
            let params = new URLSearchParams()
            params.append('token','1aa2bb23-84be-43af-a8fb-2f22fdfbf153')
            params.append('goodsJsonStr',"[{'goodsId':'99763','number':'1','propertyChildIds':'5351:17890,8782:35182','logisticsType':'0'}]")
            Axios.post('https://api.it120.cc/small4/order/create',params
            ).then(res => {
              console.log(res)
              let {data} = res.data
            })
          },
          topay() {
            let msg = {
              price:0.1,
              id: this.orderId
            }
            window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe93d3f996beab1eb&redirect_uri=http://www.wyunfei.com/&response_type=code&scope=snsapi_userinfo&state=${JSON.stringify(msg)}#wechat_redirect`;
          },
          back() {
            myvue.$emit('back')
            window.history.back()
          },
        }
    }
</script>
<style scoped>

</style>
