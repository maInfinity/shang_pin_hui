import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import {Button,MessageBox} from 'element-ui';
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.component(Button.name, Button);
Vue.component('TypeNav', TypeNav)
Vue.component('Carousel', Carousel)
Vue.component('Pagination', Pagination)
import '@/mock/mockServer'
import 'swiper/css/swiper.css'
import * as API from '@/api'
import store from '@/store'

// 这里是图片懒加载的功能
import VueLazyload from 'vue-lazyload'
import atm from '@/assets/atm.gif'
Vue.use(VueLazyload, {
  loading: atm,
})
// 这里是图片懒加载的功能

import "@/plugins/validate"

new Vue({ 
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
