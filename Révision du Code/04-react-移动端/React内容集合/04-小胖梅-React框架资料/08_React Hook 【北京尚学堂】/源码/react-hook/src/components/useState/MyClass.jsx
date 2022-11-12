import React, { Component } from 'react'
//提供数据
export default class MyClass extends Component {
    constructor(){
        super()
        this.state={
            num:100  
        }
    }
    changeNum=()=>{
        this.setState({
            num:this.state.num+10
        })
    }
  render() {
    return (
      <div>MyClass
        < p>num:{this.state.num}</p>
        <button onClick={this.changeNum}>num++</button>
      </div>
    )
  }
}
