import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Carousel3d from 'vue-carousel-3d'

Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper);
Vue.use(Carousel3d);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')