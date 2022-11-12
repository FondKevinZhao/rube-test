/*
  根据prevState（之前数据）和action来计算生成newState（新数据）的函数模块
*/
import { combineReducers } from "redux";
// reducers函数名称，一般和管理的数据名称一致
// prevState = 0 给数据一个初始化值
function count(prevState = 0, action) {
  // console.log(prevState, action);
  // if (action.type === "INCREMENT") {
  //   return prevState + action.data;
  // } else if (action.type === "DECREMENT") {
  //   return prevState - action.data;
  // } else {
  //   return prevState;
  // }

  switch (action.type) {
    case "INCREMENT":
      return prevState + action.data;
    case "DECREMENT":
      return prevState - action.data;
    default:
      return prevState;
  }
}

function user(prevState = { name: "jack" }, action) {
  switch (action.type) {
    default:
      return prevState;
  }
}

// 将多个reducer函数整合成一个函数
// 暴露的数据：  { count: 0, user: { name: "jack" } }
export default combineReducers({
  user,
  count,
});
