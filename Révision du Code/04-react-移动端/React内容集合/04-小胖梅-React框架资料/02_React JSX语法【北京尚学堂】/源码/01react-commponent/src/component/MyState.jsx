import React, { Component } from 'react'
/* 
    组件内部变量：
    1. 定义constructor()  this.state={ } 响应式数据

    修改state数据的值
        this.setState({
            state里面的属性：值
        })
    组件定义事件
    <标签 onClick={ 函数名 }></标签>
    <标签 onClick={ ()=>{  修改state数据方法  } }></标签>
*/
export default class MyState extends Component {
    //构造函数 自动执行
    constructor(props){
       super(props)
       //定义当前组件的内部变量  this.state里面的变量是响应式的 
       this.state={
            user:'admin',
            num:100
       }
       //定义其他不响应数据
       this.age=20;
       this.obj={
        user:'aaa'
       }
    }
  render() {
    return (
      <div>MyState
        <p>访问组件内部数据：{this.state.user}</p>
        <p>访问组件内部数据num：{this.state.num}</p>
        {/* 修改state数据---setState响应式 */}
        <button onClick={()=>{ 
            this.setState({
                num:++this.state.num
            })

         }}>num++</button>
         <hr />
         <h3>不响应数据 普通的this.变量</h3>
         <p>age:{this.age}</p>
         <p>user:{this.obj.user}</p>
         {/* 视图不响应 不同步更新视图  普通变量的定义和修改 数据修改了在当前js文件 页面视图不同步*/}
         <button onClick={ 
            ()=>{
               this.age=21; 
            }
         }>修改年龄</button>

      </div>
    )
  }
}
