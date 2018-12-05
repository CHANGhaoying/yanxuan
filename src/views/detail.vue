<template>
  <div class="detail">
    <div class="detail-div">
      <!--轮播图-->
      <div class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for='(i,x) in detailData.pics' :key='x'>
            <img :src="i.pic" alt="">
          </li>
          <!--<li class="swiper-slide"><img src="../assets/images/3.jpg" alt=""></li>-->
        </ul>
        <div class="swiper-pagination"></div>
      </div>
      <span class='iconfont icon-fanhui' @click='back'></span>
      <!--商品详情-->
        <!--砍价-->
      <div v-if='info.kanjia'><kanjia-detail :info='info'></kanjia-detail></div>
      <!--拼团-->
      <div v-if='info.pingtuan'><pintuan-detail :info='info'></pintuan-detail></div>
      <!--购买-->
      <div v-if='!info.pingtuan  && !info.kanjia'><goumai-detail :info='info'></goumai-detail></div>

      <p class="kongyu"></p>
      <!--选择规格和版本-->
      <a class="checkguige" v-if='!info.kanjia'>
        <span>选择规格：选择版本</span>
        <span class="iconfont icon-rightarrow" @click='show'></span>
      </a>
      <p class="kongyu"></p>

      <!--商品介绍和评价-->
      <ul class="detail-nav">
        <li @click='active(true)'><span :class='{active:flag}'>商品介绍</span></li>
        <li @click='active(false)'><span :class='{active:!flag}'>商品评价</span></li>
      </ul>
      <div id="jieshao" v-html="detailData.content"></div>
      <div id="pingjia"></div>
    </div>


    <!--页脚-->
    <div class="detail-foot">
      <!--砍价-->
      <router-link to="" class="detail-foot-kanjia" v-if='info.kanjia'>立即发起砍价，最低可砍到{{info.minPrice}}元</router-link>
      <!--购买-->
      <ul class="detail-foot-goumai" v-if='!info.pingtuan && !info.kanjia'>
        <li><a href="#" class="iconfont icon-kefu"></a></li>
        <li @click='tocart'><a class="iconfont icon-gouwuche"></a><span>0</span></li>
        <li><span class="iconfont icon-unie601" ></span><!-- <span class="iconfont icon-shoucang"></span> --></li>
        <li @click='show'><a href="#">立即购买</a></li>
        <li @click="addcart()"><a>加入购物车</a></li>
      </ul>
      <!--拼团-->
      <ul class="detail-foot-pintuan" v-if='info.pingtuan'>
        <li><a href="#" class="iconfont icon-kefu"></a></li>
        <li><span class="iconfont icon-unie601" ></span><!-- <span class="iconfont icon-shoucang"></span>--></li>
        <li @click='show'><a href="#"><span>￥{{info.originalPrice}}</span><p>原价购买</p></a></li>
        <li><a href="#"><span>￥{{info.pingtuanPrice}}</span><p>一键开团</p></a></li>
      </ul>
    </div>
    <!--模态框-->
    <div class="modal" v-show='flag1'>
      <div class="modal-cont">
        <ul class="modal-cont-topic">
          <li><img :src="info.pic" alt=""></li>
          <li>
            <p>{{info.name}}</p>
            <p>￥{{info.originalPrice}}</p>
          </li>
          <li><span class="iconfont icon-shanchuguanbicha" @click='hide'></span></li>
        </ul>
        <ul class="modal-cont-leixing">
          <li v-for="(item,index) in detailData.properties" :key='index'>
            <span>{{item.name}}</span>
            <p>
              <span v-for='(i,x) in item.childsCurGoods' 
              :key='x' style='margin-bottom:10px'
              @click='getSize(item,i)'
              >{{i.name}}</span>
            </p>
          </li>
          
        </ul>
        <ul class="modal-cont-num">
          <li>购买数量</li>
          <li><button>-</button><span>1</span><button>+</button></li>
        </ul>
        <p class="modal-cont-foot" @click='tobuy'>立即购买</p>
      </div>
    </div>

  <!-- 砍价 模态框 -->
    <div class='kj_modal'>
      
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import '../assets/css/swiper.min.css'
  import KanjiaDetail from '../components/detail/kanjiadetail'
  import PintuanDetail from '../components/detail/pintuandetail'
  import GoumaiDetail from '../components/detail/goumaidetail'
  import Axios from 'axios'
  import myvue from '../myvue'
  export default {
      name: "Detail",
      components:{
        KanjiaDetail,
        PintuanDetail,
        GoumaiDetail
      },
      data() {
        return {
          detailData:[],
          info: [],
          flag:true,
          flag1:false,
          size: [],
          
        }
      },
      beforeCreate() {//100027 100031
        //console.log(this.$route.query.id)
        let { id } = this.$route.query
        Axios.post('https://api.it120.cc/small4/shop/goods/detail?id='+id,
        ).then(res => {
          
          let { data } = res.data
          this.detailData = data
          this.info = data.basicInfo
          console.log(this.info)
          this.$store.commit('detail',data)
          sessionStorage.info = JSON.stringify(data.basicInfo)
        })
      },
      mounted() {
        new Swiper('.swiper-container', {
          autoplay:{
             disableOnInteraction: false,
             delay:2000         
          },
          pagination: {
    　　　　　　　　el: '.swiper-pagination',
    　　　　　　　　clickable: true,
    　　　　　　},
          observer:true,//修改swiper自己或子元素时，自动初始化swiper 
          observeParents:true,//修改swiper的父元素时，自动初始化swiper 			
        })
      },
      methods:{
        active(x) {
          this.flag = x;
        },
        show() {
          this.flag1 = true
        },
        hide(){
          this.flag1 = false
        },
        getSize(x,y) {
            let n = this.size.join().indexOf(x.id)
            if(n === 0){
              this.size.splice(0,1,x.id+':'+y.id)
            }
            else if(n != -1 && n != 0){
              this.size.splice(1,1,x.id+':'+y.id)
            }
            else{
              this.size.push(x.id+':'+y.id)
            }
           sessionStorage.size = JSON.stringify(this.size)
           
        },
        addcart() {//加入购物车
        //sessionStorage.cartData = ''
          let a = sessionStorage.getItem('cartData')
          let b = []
          b.push(this.info)
          if(a){
            let arr = JSON.parse(a).concat(b)
            sessionStorage.cartData = JSON.stringify(arr)
          }
          else{
            console.log(b)
            sessionStorage.cartData = JSON.stringify(b)
          }
        },
        tocart() {
          myvue.$emit('back');
           this.$router.push('/cart')
        },
        back() {
          myvue.$emit('back');
          this.$router.push('/')
        },
        tobuy() {
          if(this.size.length < this.detailData.properties.length){
            alert('请选择商品参数')
          }
          
          else{
            //this.$router.push('/order')
            if(confirm("您还未登录，确定登录吗？")){
              myvue.$emit('go')
              this.$router.push('/login')
            }
            else{
              this.$router.push('/order')
            }
            
          }
        }    
      },
      created(){
        // let params = new URLSearchParams();
        // params.append('mobile','13500000000')
        // params.append('pwd',123)
        // params.append('deviceId','123')
        // params.append('deviceName','asd')//?mobile=13500000000&pwd=123&deviceId=123&deviceName=asd
        // Axios.post('https://api.it120.cc/small4/user/m/login',
        //   params
        // ).then(res => {
        //   console.log(res)
        // })
      }
   
    }
</script>

