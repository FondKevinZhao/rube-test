import React, { Component } from 'react'
import Ceng5 from './Ceng5'
import MyContext from './Mycontext'
//第二种方法 获取数据
export default class Ceng4 extends Component {
  getParent=()=>{
    this.context.changenum()
  }
  render() {
    console.log(this);
    return (
      <div>
        <h4>第五层</h4>
        {/* 获取顶级数据 */}
        <p>msg:{this.context.msg}</p>
        <button onClick={this.getParent}>调用顶级的函数</button>
        <hr />
        <Ceng5/>
      </div>
    )
  }
}
Ceng4.contextType=MyContext
