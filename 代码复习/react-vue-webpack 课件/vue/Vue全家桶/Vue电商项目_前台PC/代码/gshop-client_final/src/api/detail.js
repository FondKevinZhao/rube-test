import request from "../utils/request";

export default {
  // 获取商品详情数据
  reqGetGoodsDetail(skuId) {
    return request({
      method: "GET",
      url: `/item/${skuId}`,
    });
  },
};
