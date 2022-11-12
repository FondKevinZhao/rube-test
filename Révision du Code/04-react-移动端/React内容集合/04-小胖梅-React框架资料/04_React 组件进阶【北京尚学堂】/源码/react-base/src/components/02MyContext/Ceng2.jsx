import React, { Component } from 'react'
import Ceng3 from './Ceng3'
export default class Ceng2 extends Component {
  render() {
    return (
      <div>
        <h3>第三层</h3>
        <p>使用第一层Parent数据msg:{this.props.msg}</p>
        <hr />
        <Ceng3/>
      </div>
    )
  }
}
