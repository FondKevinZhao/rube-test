import Vue from "vue";

import { ValidationObserver, ValidationProvider } from "vee-validate";

import App from "./App.vue";
import Footer from "./components/Footer";
import TypeNav from "./components/TypeNav";
import Carousel from "./components/Carousel";
import Pagination from "./components/Pagination";

import router from "./router";
import store from "./store";

import * as API from "./api";

import "./assets/css/normalize.css";
import "./assets/css/reset.css";
import "./assets/css/iconfont.css";

// 测试
import "./test";
// mock
import "./mock";

Vue.config.productionTip = false;

// 全局注册组件
Vue.component("Footer", Footer);
Vue.component("TypeNav", TypeNav);
Vue.component("Carousel", Carousel);
Vue.component("Pagination", Pagination);
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

Vue.prototype.$API = API;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
