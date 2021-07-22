import request from "../utils/request";

export default {
  // 搜索商品列表
  reqSearchProductList(data) {
    return request({
      method: "POST",
      url: "/list",
      data,
    });
  },
};
