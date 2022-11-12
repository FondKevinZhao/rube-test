import React, { Component } from 'react'
import Parent from './components/01tisheng/Parent'
import MyForm from './components/03form/MyForm'
import Home from './components/04proptypes/Home'
import About from './components/05zuhe/About'
import Baidu from './components/06baidulogin/Baidu'
// import ParentChild from './components/02xiongdi/Parent'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 百度登录 */}
        <Baidu/>
        {/* 组合 */}
        {/* <About/> */}
        {/* props类型检测 */}
        {/* <Home/> */}
        {/* 表单操作 */}
        {/* <MyForm/> */}
        {/* 兄弟交互数据 */}
        {/* <ParentChild/> */}
        {/* 父子组件通信 */}
        {/* <Parent/> */}
      </div>
    )
  }
}

