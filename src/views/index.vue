<template>
<div class='index'> 
    
    <section>
		<Banner></Banner>
		<div class='box'>
			<my-nav></my-nav>
			<div class="img">
				<img src="../assets/images/big.png" alt="">
			</div>
			<Kanjia></Kanjia>
			<Jingxuan></Jingxuan>
			<Tuijian></Tuijian>
		</div>
	</section>
	
	<footer>
		<foot></foot>
	</footer>


</div>
    

</template>
<script>
import Axios from 'axios';
import Banner from '../components/banner.vue';
import Foot from '../components/foot.vue';
import myNav from '../components/mynav.vue';
import Kanjia from '../components/kanjia.vue';
import Jingxuan from '../components/jingxuan.vue';
import Tuijian from '../components/tuijian.vue';
export default {
	components:{
		Banner,
		Foot,
		myNav,
		Kanjia,
		Jingxuan,
		Tuijian,
	},
	computed:{
		banner() {
			return this.$store.state.banner
		}
	},
	beforeCreate() {
		
	},
	mounted() {
		Axios.get("https://api.it120.cc/small4/shop/goods/category/all").then(res => {
			console.log(res.data)
			
			
		});
	},
}
</script>

