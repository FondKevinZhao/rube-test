// 入口js文件（webpack打包的入口文件）
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// 引入antd的样式
import "antd/dist/antd.less";

// 将App组件渲染到指定容器中（root）
ReactDOM.render(<App />, document.getElementById("root"));
