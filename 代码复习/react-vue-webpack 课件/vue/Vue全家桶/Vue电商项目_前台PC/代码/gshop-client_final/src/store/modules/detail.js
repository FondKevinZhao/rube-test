import * as API from "../../api";

export default {
  // 开启命名空间模式
  namespaced: true,
  state: {
    goods: {
      // 分类数据
      categoryView: {},
      // 销售属性数据
      spuSaleAttrList: [],
      // 商品详情
      skuInfo: {
        skuImageList: [],
      },
    },
  },
  getters: {},
  actions: {
    async getGoodsDetail({ commit }, skuId) {
      const goods = await API.detail.reqGetGoodsDetail(skuId);
      commit("GET_GOODS_DETAIL", goods);
    },
  },
  mutations: {
    GET_GOODS_DETAIL(state, goods) {
      state.goods = goods;
    },
  },
};
