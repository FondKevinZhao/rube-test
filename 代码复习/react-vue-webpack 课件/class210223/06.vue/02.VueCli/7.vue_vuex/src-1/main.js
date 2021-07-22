import Vue from "vue";
import store from "./store";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  // 应用store
  store,
  render: (h) => h(App),
}).$mount("#app");
