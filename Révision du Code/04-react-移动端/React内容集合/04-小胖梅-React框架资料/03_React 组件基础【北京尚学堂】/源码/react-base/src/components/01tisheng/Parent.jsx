import React, { Component } from 'react'
import Son from './Son'
export default class Parent extends Component {
    constructor(){
        super()
        this.state={
            num:100,
            str:'hello',
            n:''
        }
    }
    //修改num变量
    changeNum=()=>{
        this.setState({
            num:this.state.num+10
        })
    }
    //定义修改num--方法 传递给子组件
    changeNumReduce=(n)=>{
      console.log(n,'-------------------');
        this.setState({
            num:this.state.num -n,
            n:n
        })
    }
  render() {
    return (
      <div>
        <h2>父组件</h2>
        <p>num:{this.state.num}</p>
        <p>接受子组件数据：{this.state.n}</p>
        <button onClick={this.changeNum}>num++</button>
        <hr />
        <Son num={this.state.num} msg='hello' changeNumReduce={this.changeNumReduce} />
      </div>
    )
  }
}
