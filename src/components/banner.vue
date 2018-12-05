<template>
    <div class="banner">
		<div class="swiper-container"  >
			<div class="swiper-wrapper" >
				<div class="swiper-slide" v-for="(i,x) in banner" :key="x">
                   <img :src="i.picUrl" alt="">
                </div>           
			</div>
		    <div class="swiper-pagination"></div>
		</div>
	</div>
</template>
<script>
import Swiper from 'swiper';

import Axios from 'axios';
export default {
	components:{
		
	},
	data(){
		return {
			banner: [],
		}
	},
	computed:{
	},
    mounted() {
	  Axios.get("https://api.it120.cc/small4/banner/list").then(res => {
		//console.log(res.data.data)
		let { data } = res.data
		this.banner = data
		this.myswiper()
	  });

	  
	},
	methods: {
		myswiper(){
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
		}
	},
	
}
</script>
