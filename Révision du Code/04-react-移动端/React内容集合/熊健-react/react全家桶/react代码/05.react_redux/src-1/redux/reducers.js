/*
  根据prevState（之前数据）和action来计算生成newState（新数据）的函数模块
*/

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

export default count;
