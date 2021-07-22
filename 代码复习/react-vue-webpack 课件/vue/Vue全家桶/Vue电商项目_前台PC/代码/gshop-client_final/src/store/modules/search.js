import * as API from "../../api";

export default {
  namespaced: true,
  state: {
    // 商品品牌列表
    trademarkList: [],
    // 商品属性列表
    attrsList: [],
    // 商品列表
    goodsList: [],
    // 商品总数
    total: 0,
  },
  getters: {},
  actions: {
    async searchProductList({ commit }, data) {
      const result = await API.search.reqSearchProductList(data);
      commit("SEARCH_PRODUCT_LIST", result);
    },
  },
  mutations: {
    SEARCH_PRODUCT_LIST(state, result) {
      state.trademarkList = result.trademarkList;
      state.attrsList = result.attrsList;
      state.goodsList = result.goodsList;
      state.total = result.total;
    },
  },
};
