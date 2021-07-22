import Vue from "vue";
import Vuex from "vuex";

import * as modules from "./modules";

Vue.use(Vuex);

export default new Vuex.Store({
  // state,
  // getters,
  // actions,
  // mutations,
  modules,
});

/*
  之前没有使用modules，state数据结构
    {
      categoryList: []
    }
  
  现在使用了modules，state数据结构
    {
      home: {
        categoryList: []
      },
      search: {}
    }
*/
