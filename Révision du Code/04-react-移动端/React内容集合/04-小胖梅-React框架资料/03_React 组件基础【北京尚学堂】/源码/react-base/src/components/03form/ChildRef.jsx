import React, { Component } from 'react'

export default class ChildRef extends Component {
    constructor(){
        super()
        this.state={
            child:'我是子组件数据'
        }
    }
    child(){
        console.log('我是子组件方法');
    }
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>我是子组件</h3>
        <p>{this.props.msg}</p>
      </div>
    )
  }
}
