import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/css/public.css"

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render(h){
    return h(App)
  }
})
