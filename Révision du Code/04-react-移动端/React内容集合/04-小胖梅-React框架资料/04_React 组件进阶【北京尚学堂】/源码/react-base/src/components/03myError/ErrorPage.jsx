import React, { Component } from 'react'
//错误边界：网页出错了  有替代的页面显示   
//这是一个错误的组件 
export default class ErrorPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false //定义变量 默认值false 是否出错了  默认没有报错
        };
      }
    
      static getDerivedStateFromError(error) {
        // 更新 state 使下一次渲染能够显示降级后的 UI
        console.log('页面报错了');
        return { hasError: true };
      }

  render() {
    if( this.state.hasError){//说明页面报错了  请显示备用界面-组件
        return <h2>我是404的界面</h2>
    }
    return this.props.children;
  }
}
