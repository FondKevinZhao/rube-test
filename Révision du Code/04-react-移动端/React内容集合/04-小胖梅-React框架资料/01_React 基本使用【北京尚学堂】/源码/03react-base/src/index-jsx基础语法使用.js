//导入react模块
import React from 'react';
//导入react-dom可以把虚拟dom转成真实DOM
import ReactDOM from 'react-dom/client';

//jsx语法：
//语法定义：jsx语法就是在js文件里面可以直接html标签 不用加引号,如果html标签里面获取js变量需要{ 变量 }
let str="hello world";
let num=100;
let arr=[1,2,3]
let obj={
  user:'admin'
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <div>
    <h2>jsx语法基本使用</h2>
    <p>获取变量str: { str }</p>
    <p>num:{num}</p>
    {/* jsx语法里面的注释：三目运算 */}
    <p>{2>1?'真':"假"}</p>
    {/* 数组对象函数 if for不可以直接渲染  */}
    <p>arr:{arr[0]} {arr[1]}</p>
    <p>obj.user:{obj.user}</p>
    <h4>样式style</h4>
    <p style={{color:'red',fontSize:'30px'}}>我是红色字体</p>
    <p className='box'>样式css控制</p>

   </div>
  </React.StrictMode>
);
