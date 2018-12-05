<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <transition :name='transitionName'>
      <!-- <keep-alive> -->
        <router-view class='Router'/>
      <!-- </keep-alive> -->
      
    </transition>
    
  </div>
</template>

<script>
import Axios from 'axios'
import myvue from './myvue'
export default {
  name: 'App',
  data() {
    return{
      transitionName:''
    }
  },
  
  mounted() {
    myvue.$on('go',()=>{
      //console.log('去')
      this.transitionName = 'transitionLeft'
    })
    myvue.$on('back',()=>{
      //console.log('返回')
      this.transitionName = 'transitionRight'
    })
    myvue.$on('peer',()=>{
      this.transitionName = ''
    })
  },

  beforeCreate() {
    Axios.get("https://api.it120.cc/small4/shop/goods/list").then(res => {
			
			let {data} = res.data
			this.$store.commit('list', data)
			
		});
  }
}
</script>
<style>
  .transitionLeft-enter{
    transform: translateX(100%);
  }
  .transitionRight-enter{
    transform: translateX(-100%);
  }
  .transitionLeft-enter-active,.transitionRight-enter-active{
    transition: 0.5s;
  }
  .transitionLeft-to,.transitionRight-to{
    transform: translateX(0);
  }
</style>


