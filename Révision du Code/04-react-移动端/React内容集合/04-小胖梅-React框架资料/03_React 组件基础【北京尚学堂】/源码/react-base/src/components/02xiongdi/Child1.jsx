import React, { Component } from 'react'

export default class Child1 extends Component {
    constructor(){
        super();
        this.state={
            son1:'我是大儿子的数据'
        }
    }
    //定义事件---发送数据给父组件
    send=()=>{
        //调用父组件的方法 接受数据
        this.props.getData(this.state.son1)
    }
  render() {
    return (
      <div>
        <h3>Child1</h3>
        <p>获取自己数据：{this.state.son1}</p>
        <button onClick={()=>this.setState({son1:'新数据'})}>修改自己的son1数据</button>
        {/* 把子组件的数据--通过事件传递给父组件 */}
        <button onClick={this.send}>发送数据</button>
      </div>
    )
  }
}
