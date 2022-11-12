import React, { Component } from 'react'
//导入子组件
import Son from './Son'
export default class Parent extends Component {
  render() {
    let str='你好';
    let arr=[10,20,30]
    return (
      <div>
        <h3>Parent</h3>
        <hr />
        {/* 传递给子组件son数据 以属性 props传递数据 */}
        <Son msg='hello'  num='10' str={str} arr={arr}/>
      </div>
    )
  }
}
