import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

/*
  全局事件总线: 实现任意组件通信
  通过自定义事件实现
  任意组件都可以绑定事件和触发事件 --> 保证绑定事件和触发事件是同一个实例对象（因为自定义事件给谁绑定，就只有它可以触发）
  有哪些绑定事件的对象？
    Vue的实例对象（更好操作）
    组件的实例对象（不好操作）
  任意组件都要访问到这个对象？
    给Vue.prototype绑定这个对象
    所有对象都能通过原型属性得到它
*/
// Vue.prototype.$globalEventBus = new Vue();

new Vue({
  beforeCreate() {
    Vue.prototype.$globalEventBus = this;
  },
  render: (h) => h(App),
}).$mount("#app");

// console.log(vm, "vm");
