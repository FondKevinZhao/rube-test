import Vue from "vue";
import App from "./App.vue";

// 关闭生产环境的提示
Vue.config.productionTip = false;

// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");

// const vm = new Vue({
//   render: (h) => h(App),
// });
// vm.$mount("#app");

// 找到要最外层容器有两种方式：1. el  2. $mount
new Vue({
  el: "#app",
  // 将App组件渲染到el容器中
  // render: (createElement) => createElement(App),
  render: (h) => h(App),
  // components: {
  //   App,
  // },
});

/*
  vue的版本是很多个：https://cn.vuejs.org/v2/guide/installation.html#%E5%AF%B9%E4%B8%8D%E5%90%8C%E6%9E%84%E5%BB%BA%E7%89%88%E6%9C%AC%E7%9A%84%E8%A7%A3%E9%87%8A

    import Vue from "vue"; // vue.runtime.esm.js
    基于ES6模块化的只包含运行时的vue版本
    只包含运行时的vue版本，是没有编译模板能力的
    所以不能编译 <div id="app"><App /></div>，就会报错
    如果希望vue能编译模板，就需要引入完整版的vue
      import Vue from "vue/dist/vue.esm.js"; 此时就具备编译模板能力，就OK
      这样有几个问题：
        1. 完整版体积更大
        2. 写起来也麻烦
       最终做法是：
        1、引入 只包含运行时的vue版本（优点：体积小）
        2、使用render方法：将App组件渲染到el容器中（优点：写法简单）
*/
