import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.$Bus = new Vue()

import store from './store'

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
