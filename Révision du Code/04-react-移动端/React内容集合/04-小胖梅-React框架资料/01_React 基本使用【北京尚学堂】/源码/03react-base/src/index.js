//导入react模块
import React from 'react';
//导入react-dom可以把虚拟dom转成真实DOM
import ReactDOM from 'react-dom/client';
//导入App.js模块-- 组件
import App from './App';
// import MyClass from './components/MyClass'
//前端性能js 可以忽略
import reportWebVitals from './reportWebVitals';
// console.log('App',App);
// console.log('App()',App());
// console.log(' <App />', <App />);

//获取页面的根元素 id=root 
// ReactDOM.render(<h2>哈哈哈</h2>,document.getElementById('root'))//17的版本
//18.x版本渲染react元素内容   
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);
// <React.StrictMode> react严格模式  检测react语法是否过时

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
