/*
  用来创建action对象的工厂函数模块
    action对象：{ type: 操作类型, data: 数据 }
  
  定义多少个工厂函数模块？看对数据有多少种操作
*/

// 同步action creator: 返回值是action对象
export function increment(num) {
  return {
    type: "INCREMENT",
    data: num,
  };
}

export const decrement = (num) => ({ type: "DECREMENT", data: num });

// 异步action creator：发送请求等异步操作
// 返回值是一个函数，函数中执行异步操作
export const incrementAsync = (num) => {
  return (dispatch) => {
    setTimeout(() => {
      // 调用dispatch方法来触发更新
      dispatch(increment(num));
    }, 1000);
  };
};
