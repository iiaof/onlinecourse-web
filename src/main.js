import Vue from 'vue'
import App from './App.vue'
import Router from '@/router'

import VueLazyload from 'vue-lazyload'
import '@/assets/css/font-icon/style.css'

Vue.config.productionTip = false

//安装图片懒加载插件
Vue.use(VueLazyload,{
  error: '',
  loading: '',
  attempt: 1
});

new Vue({
  router:Router,
  render: h => h(App),
}).$mount('#app')
