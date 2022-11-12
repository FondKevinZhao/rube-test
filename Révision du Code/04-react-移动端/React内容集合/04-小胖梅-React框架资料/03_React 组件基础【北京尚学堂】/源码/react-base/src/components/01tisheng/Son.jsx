import React, { Component } from "react";

export default class Son extends Component {
constructor(){
    super()
    this.state={
        n:20
    }
}
  //定义修改父组件的props的方法
  changeParentNum = () => {
    // this.props.num = 99;//报错 只读属性
    //调用父组件传递的修改方法
    // this.props.changeNumReduce(20)
    //子组件传递数据给父组件   ---- 在子组件定义事件--触发事件的时候调用父组件传递的函数 （接受参数）
    this.props.changeNumReduce(this.state.n)
  };
  render() {
    console.log(this.props);
    return (
      <div>
        Son
        <p>接受父组件数据msg:{this.props.msg}</p>
        <p>接受父组件数据num:{this.props.num}</p>
        <p>n：{this.state.n}</p>
        <button onClick={()=>this.setState({n:10})}>修改n传递给父组件数据</button>
        <button onClick={this.changeParentNum}>发送数据--num--</button>
      </div>
    );
  }
}
