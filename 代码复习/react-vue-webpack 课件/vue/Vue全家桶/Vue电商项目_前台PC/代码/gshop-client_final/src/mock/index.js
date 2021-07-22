import Mock from "mockjs";

import banners from "./banners.json";
import floors from "./floors.json";

// mock会在vue脚手架启动开发服务器中加入拦截请求功能
// 拦截 /mock/getBanners 请求，返回模拟数据
Mock.mock("/mock/getBanners", "get", {
  code: 200,
  message: "",
  ok: true,
  data: banners,
});

Mock.mock("/mock/getFloors", "get", {
  code: 200,
  message: "",
  ok: true,
  data: floors,
});

// http://mockjs.com/examples.html
Mock.mock("/mock/getData", "get", {
  code: 200,
  message: "",
  ok: true,
  "data|3-10": [
    // data数组长度3-10位
    {
      "id|+1": 1, // id递增
      name: "@cname()", // 随机中文名
      "age|18-60": 18, // 年龄18-60之间
    },
  ],
});
