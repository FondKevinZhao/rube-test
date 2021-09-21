// vuex配置
import Vue from "vue";
import Vuex from "vuex";

import modules from "./modules";

// 安装插件
Vue.use(Vuex);

const store = new Vuex.Store({
  modules,
});

/*  
  modules: {
    app: {
      state,
      getters,
      actions,
      mutataions,
    },
    shopcart: {
      state,
      getters,
      actions,
      mutataions,
    },
    xxx: {
      state,
      getters,
      actions,
      mutataions,
    }
  }
*/

export default store;
