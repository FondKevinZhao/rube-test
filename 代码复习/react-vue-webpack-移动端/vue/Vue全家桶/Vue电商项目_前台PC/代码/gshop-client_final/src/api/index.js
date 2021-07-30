// 负责汇总所有接口文件，并统一暴露出去
// import home from "./home";
// import user from "./user";

/*
  暴露的结构：
    {
      home: {
        reqGetBaseCategoryList: function
      }
    }
*/

// export {
//   home,
//   user,
// };

/*
    ES6模块化：
      暴露
        默认暴露 export default xxx
          引入方式为：import xxx from './xxx';
                     impo
        统一暴露 export { xxx, yyy }
        分别暴露 export const xxx = xxx;
          引入方式必须为：import { xxx, yyy } from './xxx';
          另外一种用法：import * as xxx from './xxx'

    默认暴露的模块
      export default {};
    如何引入默认暴露的模块？
      import home from './home'

*/
export { default as home } from "./home";
export { default as user } from "./user";
export { default as mock } from "./mock";
export { default as search } from "./search";
export { default as detail } from "./detail";
export { default as shopcart } from "./shopcart";
export { default as pay } from "./pay";
/*
    模块暴露的内容：
      {
        home: { xxx },
        user: { yyy }
      }
*/
