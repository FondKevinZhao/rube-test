import React, { Component } from 'react'
import MyContext from './Mycontext'
export default class Ceng5 extends Component {
    static contextType = MyContext//把数据绑定给当前的组件 this 
  render() {
    console.log('-----',this);
    return (
      <div>
        <h5>第六层</h5>
        <p>{this.context.msg}</p>
        <p>{this.context.num}</p>
      </div>
    )
  }
}
