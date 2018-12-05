<template>
    <div class="newaddress">
      <div class="samehead">
        <span class="iconfont icon-fanhui" @click='back'></span>
        <p class="samehead-title">新增地址</p>
      </div>
      <div class="newaddress-body">
        <ul class="address-message">
          <li><span>联系人</span><input type="text" placeholder="姓名" v-model="Uname"></li>
          <li><span>手机号码</span><input type="number" placeholder="11位手机号码" v-model='mobile'></li>
          <li>
            <span>选择地区</span>
            <select class="sel1" @change='getCity' v-model="provinceId">
              <option value='0'>请选择</option>
              <option
                :value="i.id" 
                v-for='(i,x) in provinceData' 
                :key='x'>{{i.name}}</option>
            </select>
            <select  class="sel2" @change='getCounty' v-model="cityId">
              <option value="0">请选择</option>
              <option
                :value="i.id" 
                v-for='(i,x) in cityData' 
                :key='x'>{{i.name}}</option>
            </select>
            <select  class="sel2" v-model="countyId">
              <option value="0">请选择</option>
              <option
                :value="i.id" 
                v-for='(i,x) in countyData' 
                :key='x'>{{i.name}}</option>
            </select>
          </li>
          <li><span>详细地址</span><input type="text" placeholder="街道门牌信息" v-model='address'></li>
          <li><span>邮政编号</span><input type="text" v-model="code"></li>
        </ul>
        <p  @click='add'><a>保存</a></p>
        <p>
          <a href="#" style="background:#1aad19" >从微信读取</a>
          <a href="#" style="background:#fff,color:#000" v-show="false">删除地址</a>
        </p>
        <p><a @click="back" style="background:#fff,color:#000">取消</a></p>
      </div>
      <!--model-->
      <div class="newaddress-model">
        <div class="newaddress-model-cont">
          <h5>提示</h5>
          <p>确定要删除收货地址吗？</p>
          <p><button>取消</button><router-link to="#">确定</router-link></p>
        </div>
      </div>
    </div>
</template>

<script>
  import Axios from 'axios'
  import myvue from '../../myvue'
    export default {
      name: "newaddress",
      data() {
        return {
          provinceData:[],
          cityData:[],
          countyData:[],
          countyId:0,
          cityId:0,
          provinceId:0,
          Uname:'',
          address:'',
          mobile:'',
          code: ''
        }
      },
      created() {
        //获取所有省份
        Axios.post('https://api.it120.cc/common/region/province').then(res => {
          let { data } = res.data
          this.provinceData = data
        })
      },
      methods: {
        back() {
          window.history.go(-1);
          myvue.$emit('back')
        },
        add() {
          if(!this.Uname){
            alert('请输入用户名')
          }
          else if(!this.mobile){
            alert('请输入正确的手机号码')
          }
          else if(!this.provinceId){
            alert('请选择省份')
          }
          else if(!this.cityId){
            alert('请选择城市')
          }
          else if(!this.countyId && this.countyData){
            
            alert('请选择区县')
          }
          else if(!this.address){
            alert('请输入详细地址')
          }
          else if(!this.code){
            alert('请输入邮政编码')
          }
          else{
            let params = new URLSearchParams();
            params.append('address',this.address)
            params.append('cityId',this.cityId)
            params.append('code','123456')
            params.append('linkMan',this.Uname)
            params.append('mobile','13017520322')
            params.append('provinceId',this.provinceId)
            params.append('token','1aa2bb23-84be-43af-a8fb-2f22fdfbf153')
            params.append('districtId',this.countyId)
            Axios.post('https://api.it120.cc/small4/user/shipping-address/add',params).then(res => {
              let {code} = res.data
              console.log(res)
              if(code === 0){
                this.back()
              }
            })
          }
        },
        getCity() {
          this.cityId = 0
          this.countyId = 0
          Axios.post('https://api.it120.cc/common/region/child?pid='+this.provinceId).then(res => {
            let {data} = res.data
            this.cityData = data
          })
        },
        getCounty() {
          this.countyId = 0
          Axios.post('https://api.it120.cc/common/region/child?pid='+this.cityId).then(res => {
            let {data} = res.data
            this.countyData = data
          })
        },
        
      }
    }
</script>
