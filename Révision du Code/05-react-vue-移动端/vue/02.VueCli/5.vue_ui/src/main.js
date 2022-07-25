import Vue from "vue";
// 完整引入
// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
// 安装插件
// Vue.use(ElementUI); // 内部会全局注册elementui的所有组件

// 按需引入 vue add element
import App from "./App.vue";
import "./plugins/element.js";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
