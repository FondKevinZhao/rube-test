/*
  用来创建action对象的工厂函数模块
    action对象：{ type: 操作类型, data: 数据 }
  
  定义多少个工厂函数模块？看对数据有多少种操作
*/

export function increment(num) {
  return {
    type: "INCREMENT",
    data: num,
  };
}

export const decrement = (num) => ({ type: "DECREMENT", data: num });
