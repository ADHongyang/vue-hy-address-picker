import Vue from 'vue'
import App from './App.vue'
import VueHyAddressPicker from './lib/index'

Vue.use(VueHyAddressPicker);

new Vue({
  el: '#app',
  render: h => h(App)
})
