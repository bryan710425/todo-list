import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGAPI from 'vue-gapi'
import { apiConfig } from '@/private/apiConfig'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(VueGAPI, apiConfig)
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
