import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap"
import "./assets/bootstrap-3.3.7-dist/css/bootstrap.css"
import "./assets/bootstrap-3.3.7-dist/bootstrap.min.css"
import "jquery"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
