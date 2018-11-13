// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/App.scss'
//import '../static/font_4neoqbbx4qm/iconfont.css'
import '../static/font_905546_62aepwb89d/iconfont.css'
import './assets/css/swiper.min.css' 
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
import store from './store.js'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

window.addEventListener('orientationchange', setRem);
window.addEventListener('resize', setRem);

function setRem() {
  var html = document.querySelector('html');
  var width = html.getBoundingClientRect().width;
  html.style.fontSize = width / 16 + 'px'
};
setRem();






