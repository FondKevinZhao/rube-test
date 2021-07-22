/*
  home组件接口文件
*/

import request from "../utils/request";

export default {
  // 获取首页三级分类列表
  reqGetBaseCategoryList() {
    return request({
      method: "GET",
      url: "/product/getBaseCategoryList",
    });
  },
};
