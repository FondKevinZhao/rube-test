import request from "../utils/request";

export default {
  // 获取订单页信息
  reqGetTradeInfo() {
    return request({
      method: "GET",
      url: "/order/auth/trade",
    });
  },

  reqSubmitOrder({
    tradeNo,
    consignee,
    consigneeTel,
    deliveryAddress,
    paymentWay,
    orderComment,
    orderDetailList,
  }) {
    return request({
      method: "POST",
      url: "/order/auth/submitOrder",
      params: {
        // 查询字符串参数 querystring
        tradeNo,
      },
      data: {
        // 请求体参数 body
        consignee,
        consigneeTel,
        deliveryAddress,
        paymentWay,
        orderComment,
        orderDetailList,
      },
    });
  },

  reqGetQRCode(orderId) {
    return request({
      method: "GET",
      url: `/payment/weixin/createNative/${orderId}`,
    });
  },

  reqQueryPayStatus(orderId) {
    return request({
      method: "GET",
      url: `/payment/weixin/queryPayStatus/${orderId}`,
    });
  },
};
