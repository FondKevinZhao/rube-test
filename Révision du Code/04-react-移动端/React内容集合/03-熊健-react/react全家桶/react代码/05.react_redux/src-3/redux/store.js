/*
  创建store对象
    store对象中会集中管理所有redux数据
    store对象提供的读/写redux数据的方法
      读：store.getState()
      写：store.dispatch(action)
*/

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

/*
  process.env.NODE_ENV 这是webpack打包时会添加的
    开发环境打包，值为development
    生产环境打包，值为production
*/

let middleware = applyMiddleware(thunk);

if (process.env.NODE_ENV === "development") {
  middleware = composeWithDevTools(middleware);
}

// 创建store
const store = createStore(reducers, middleware);
// 暴露出去
export default store;
