import Vue from "vue";
import router from "./router";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  // 应用router
  router,
  render: (h) => h(App),
}).$mount("#app");
