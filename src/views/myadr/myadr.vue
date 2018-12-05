<template>
    <div class="address">
      <div class="samehead">
        <span class="iconfont icon-fanhui" @click='goback'></span>
        <p class="samehead-title">我的地址</p>
      </div>
      <div class="address-body">
        <ul>
          <li v-for='(i,x) in adrList' :key="x">
            <span class="iconfont icon-gouxuan"></span>
            <p><span>{{i.linkMan}} {{i.mobile}}</span><span>{{i.provinceStr}} {{i.cityStr}} {{i.areaStr}} {{i.address}}</span></p>
            <a href="#" class="iconfont icon-bianji"></a>
          </li>
        </ul>
      </div>
      <span @click='go'>
        <router-link to="/addadr" class="address-foot">+新增地址</router-link>
      </span>
    </div>
</template>

<script>
  import Axios from 'axios'
  import myvue from '../../myvue'
    export default {
      name: "mainaddress",
      data(){
        return{
          adrList:[]
        }
      },
      created(){//10502154-3c2c-44a6-a28c-63b395d4c656  a5c15d35-c24b-4a72-9098-6d6d5e7c79a4
        
        Axios.post('https://api.it120.cc/small4/user/shipping-address/list?token=1aa2bb23-84be-43af-a8fb-2f22fdfbf153').then(res => {
          this.adrList = res.data.data
        })
      },
      mounted(){
        
      },
      methods: {
        goback() {
          window.history.go(-1);  //返回上一页
          //window.history.back();  //返回上一页
          myvue.$emit('back')
        },
        go() {
          myvue.$emit('go')
        }
      }
    }
</script>

