<template>
    <div class="login">
      <span class='iconfont icon-fanhui' @click="back"></span>
      <p class="login-head">严选</p>


      <!--注册-->
      <div class="zhuce" v-show='!logcode'>
        <p><input type="tel" placeholder="手机号"  v-model='tel' @input="getTel"></p>

        <p>
          <input type="text" placeholder="图形码" v-model='imgcode'>
          <span v-show="n"><img :src="'https://api.it120.cc/small4/verification/pic/get?key='+n" @click='getImg'></span>
        </p>

        <p><input type="text" placeholder="验证码" v-model='code'><button :disabled="dis" @click="getCode">{{yzm}}</button></p>

        <p><input type="text" placeholder="密码" @input="getPass" v-model="pass"></p>

        <p>
          <span v-show='flag == 1'>请输入有效的手机号码</span>
          <!-- <span v-show='flag == 2'>短信验证码错误</span> -->
          <span v-show='flag == 3'>密码应为6-18位的数字、字母组合</span>
        </p>
        <p>点击“注册”按钮，即表示您同意<span>《服务协议》</span></p>
        <p @click="reg">注册</p>
        <p @click="tologflag">已有账号?去登录</p>
       </div>


      <!--登录-->
      <div class="denglu" v-show='logcode'>
        <p><input type="text" placeholder="手机号" v-model="logtel"></p>
        <p><input type="text" placeholder="密码" v-model="logpass"></p>
        <p></p>
        <p @click='log'>登录</p>
        <p @click='logflag'>没账号？注册一个</p>
      </div>
    </div>
</template>

<script>
  import Axios from 'axios'
  import myvue from '../../myvue'
import { setInterval, clearInterval } from 'timers';
    export default {
      name: "login",
      data(){
          return{
            logcode:true,
            logtel: '',
            logpass:'',
            flag: 0,
            n: '',
            tel:'',pass:'',imgcode:'',code:'',
            yzm: '获取验证码',
            dis: false
            
          }
      },
      
      methods:{
        logflag() {
          this.logcode = false;
        },
        tologflag() {
          this.logcode = true;
        },
          
        back() {
          myvue.$emit('back')
          window.history.go(-1)
        },
        
        getCode() {
          if(!this.tel) {
           alert('请输入手机号码')
          }
          else if(!this.imgcode){
            alert('请输入图形码')
          }
          else if(this.flag === 1){
            alert('请输入正确的手机号')
          }
          else{
            //获取验证码
            console.log(this.n,this.imgcode)
            Axios.post('https://api.it120.cc/small4/verification/sms/get?mobile='+this.tel+'&key='+this.n+'&picCode='+this.imgcode
            ).then(res => {
              console.log(res.data)
              if(res.data.code === 0){
                this.dis = true
                let mm = 60
                this.yzm = mm + 's'
                let timers = setInterval(() => {
                    mm--
                    this.yzm = mm+'s'
                    if(mm <= 0){
                      clearInterval(timers)
                      this.yzm = '获取验证码'
                      this.dis = false
                    }
                  },1000)
                alert('短信发送成功，请注意查收')
              }
              else{
                this.getImg()
                alert(res.data.msg)
              }
            })

          }
        },
        
        getImg() {//换图
          this.n = new Date().getTime()
          this.imgcode = ''
          console.log(this.n)
        },
        getTel() {
          this.imgcode = ''
          this.code = ''
          this.pass = ''
          this.n = 0
          if(/^1(3|4|5|7|8)\d{9}$/.test(this.tel)){
            this.getImg()
            this.flag = 0
          }
          else if(!this.tel){
            this.flag = 0
          }
          else{
            this.flag = 1
          }

        },
        getPass() {
          if(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/.test(this.pass)){ 
            this.flag = 0
          }
          else{
            if(!this.flag){
               this.flag = 3
            }
          }

        },
        reg() {
         //this.getPass()
         if(!this.tel) {
           alert('请输入手机号码')
         }
         else if(!this.code){
           alert('请输入短信验证码')
         }
         else if(!this.pass){
           alert('请输入密码')
         }
         else if(this.flag === 1){
           alert('请输入正确的手机号')
         }
         else if(this.flag === 3){
           alert('请输入正确的密码')
         }
         else{
          let params = new URLSearchParams()
          params.append('mobile',this.tel)
          params.append('pwd',this.pass)
          params.append('code',this.code)
          Axios.post('https://api.it120.cc/small4/user/m/register',params).then(res => {
            console.log(res.data)
            if(res.data.code === 0){
              alert('注册成功，立即登录')
              this.logtel = this.tel
              this.tel = ''
              this.pass = ''
              this.code = ''
              this.imgcode = ''
              this.logflag = false
            }
            else{
              alert(res.data.msg)
            }
          })
         }
        },
        log() {
          if(!this.logtel){
            alert('手机号码不能为空')
          }
          else if(!this.logpass){
            alert('密码不能为空')
          }
          else{
            Axios.post('https://api.it120.cc/small4/user/m/login?deviceId=007&deviceName=monkey&mobile='+this.logtel+'&pwd='+this.logpass
            ).then(res => {
              if(res.data.code === 0){
                alert('登录成功')
                this.$router.push('/personal')
                console.log(res.data)
                //console.log(window.history)
              }
              else{
                alert(res.data.msg)
              }
            })
          }
        }
      }
    }
</script>
