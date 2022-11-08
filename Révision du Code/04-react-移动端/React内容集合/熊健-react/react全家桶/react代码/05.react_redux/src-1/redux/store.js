/*
  创建store对象
    store对象中会集中管理所有redux数据
    store对象提供的读/写redux数据的方法
      读：store.getState()
      写：store.dispatch(action)
*/

import { createStore } from "redux";

import reducers from "./reducers";

// 创建store
const store = createStore(reducers);
// 暴露出去
export default store;
