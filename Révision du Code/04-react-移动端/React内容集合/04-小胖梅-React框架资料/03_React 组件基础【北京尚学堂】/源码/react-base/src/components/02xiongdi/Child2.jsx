import React, { Component } from 'react'

export default class Child2 extends Component {
    constructor(){
        super();
        this.state={
            son2:'我是小儿子'
        }
    }
  render() {
    return (
      <div>
         <h3>Child2</h3>
        <p>获取大儿子的数据：{this.props.value}</p>
        
      </div>
    )
  }
}
