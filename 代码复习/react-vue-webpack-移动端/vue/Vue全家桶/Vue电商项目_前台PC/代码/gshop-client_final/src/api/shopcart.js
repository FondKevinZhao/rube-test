import request from "../utils/request";

export default {
  // 添加购物车
  reqAddShopCart(skuId, skuNum) {
    return request({
      method: "POST",
      url: `/cart/addToCart/${skuId}/${skuNum}`,
    });
  },
  // 获取购物车列表
  reqGetCartList() {
    return request({
      method: "GET",
      url: `/cart/cartList`,
    });
  },
  // 更新选中或不选中
  reqUpdateCartChecked(skuId, isChecked) {
    return request({
      method: "GET",
      url: `/cart/checkCart/${skuId}/${isChecked}`,
    });
  },
  // 删除购物车商品
  reqDeleteCart(skuId) {
    return request({
      method: "DELETE",
      url: `cart/deleteCart/${skuId}`,
    });
  },
};
