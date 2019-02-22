import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

import router from './router/'
import myStore from './store/'

new Vue({
  render: h => h(App),
  router,
  store:myStore
}).$mount('#app')
