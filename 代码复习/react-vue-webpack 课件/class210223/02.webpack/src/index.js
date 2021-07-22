// 主模块、入口文件
// 汇总所有模块的资源
// 引入分别暴露和默认暴露的内容
import sum, { name } from "./js/module1";

// 引入分别暴露的内容
// import { name as xxx, age } from "./js/module2";

// 引入module2暴露的所有内容，重命名为module2  { name, age }
import * as module2 from "./js/module2";

// 引入统一暴露的内容
import { add, count } from "./js/module3";

import data from "./json/data.json";

// 引入样式
// 目的：为了让webpack打包该资源
// webpack只能识别js和json资源，其他资源不识别
import "./css/test.less";
import "./css/test1.css";
import "./css/iconfont.css";

console.log(sum(1, 2, 3, 4, 5));
console.log(name);
console.log(module2.name === module2.age);
console.log(add(1, 2));
console.log(count(1, 2));
console.log(data);

const p = new Promise((resolve) => {
  resolve(123);
});

console.log(p);
