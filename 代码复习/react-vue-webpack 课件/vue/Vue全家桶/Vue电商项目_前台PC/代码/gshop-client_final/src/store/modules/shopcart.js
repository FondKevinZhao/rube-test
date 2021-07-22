import * as API from "../../api";

export default {
  // 开启命名空间模式
  namespaced: true,
  state: {
    addedGoods: {}, // 添加的商品数据
    shopcart: [], // 所有购物车数据
  },
  getters: {},
  actions: {
    async addShopCart({ commit }, goods) {
      const {
        skuId,
        skuNum,
        price,
        skuName,
        spuSaleAttrList,
        skuDefaultImg,
      } = goods;

      await API.shopcart.reqAddShopCart(skuId, skuNum);

      commit("ADD_SHOP_CART", {
        price,
        skuName,
        spuSaleAttrList,
        skuNum,
        skuDefaultImg,
      });
    },
    async getCartList({ commit }) {
      const shopcart = await API.shopcart.reqGetCartList();
      // 更新数据（data、vuex等），只更新需要使用的数据，不需要的去除
      commit("GET_CART_LIST", shopcart[0].cartInfoList);
    },
    async updateCartChecked({ commit }, { skuId, isChecked }) {
      // 更新服务器的数据
      await API.shopcart.reqUpdateCartChecked(skuId, isChecked);
      // 更新客户端vuex数据
      commit("UPDATE_CART_CHECKED", { skuId, isChecked });
    },
    async deleteCart({ commit }, skuId) {
      // 更新服务器的数据
      await API.shopcart.reqDeleteCart(skuId);
      // 更新客户端vuex数据
      commit("DELETE_CART", skuId);
    },
  },
  mutations: {
    ADD_SHOP_CART(state, addedGoods) {
      state.addedGoods = addedGoods;
    },
    GET_CART_LIST(state, shopcart) {
      state.shopcart = shopcart;
    },
    UPDATE_CART_CHECKED(state, { skuId, isChecked }) {
      const goods = state.shopcart.find((goods) => goods.skuId === skuId);
      goods.isChecked = isChecked;
    },
    DELETE_CART(state, skuId) {
      state.shopcart = state.shopcart.filter((goods) => goods.skuId !== skuId);
    },
  },
};
