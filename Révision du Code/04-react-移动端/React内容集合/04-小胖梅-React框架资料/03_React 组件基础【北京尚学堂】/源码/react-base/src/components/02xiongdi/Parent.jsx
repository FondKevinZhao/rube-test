import React, { Component } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

export default class Parent extends Component {
    constructor(){
        super()
        this.state={
            value:''
        }
    }
    //定义函数--接受子组件传递的数据
    getData=(val)=>{
        console.log(val);
        this.setState({
            value:val
        })
    }
  render() {
    return (
      <div>Parent
        <hr />
        <Child1 getData={this.getData}/>
        <hr />
        <Child2 value={this.state.value}/>
      </div>
    )
  }
}
