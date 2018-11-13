<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'App',
  beforeCreate() {
    Axios.get("https://api.it120.cc/small4/shop/goods/list").then(res => {
			console.log(res.data)
			let {data} = res.data
			this.$store.commit('list', data)
			
		});
  }
}
</script>


