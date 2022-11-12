import React, { Component } from 'react'
import Ceng1 from './Ceng1'
import MyContext from './Mycontext'
export default class Parent extends Component {
    constructor(){
        super()
        this.state={
            num:100,
            msg:'hello'
        }
    }
    //定义方法
    changenum=()=>{
        console.log(123);
    }
  render() {
    return (
      <div>Parent
        <hr />
        {/* 提供数据  value数据*/}
        <MyContext.Provider value={ {num: this.state.num,msg:this.state.msg,changenum:this.changenum } }>
            <Ceng1 num={this.state.num} msg={this.state.msg}/>
        </MyContext.Provider>
      </div>
    )
  }
}
