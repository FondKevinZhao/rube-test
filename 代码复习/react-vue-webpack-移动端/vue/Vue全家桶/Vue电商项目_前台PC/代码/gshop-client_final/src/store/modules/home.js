import * as API from "../../api";
/*
  开启命名空间
    所有state、actions、mutations映射到组件中都要加模块名称
  不开命名空间
    state要加模块名称，其余的不用
*/

export default {
  // 开启命名空间模式
  namespaced: true,
  state: {
    categoryList: [],
  },
  getters: {},
  actions: {
    async getBaseCategoryList({ commit }) {
      const categoryList = await API.home.reqGetBaseCategoryList();
      commit("GET_BASE_CATEGORY_LIST", categoryList);
    },
  },
  mutations: {
    GET_BASE_CATEGORY_LIST(state, categoryList) {
      state.categoryList = categoryList;
    },
  },
};
