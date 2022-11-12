import React, { Component } from "react";
import Unmount from "./Unmount";

export default class Mount extends Component {
    constructor(){
        super()
        this.state={
            flag:true
        }
    }
  render() {
    return (
      <div>
        Mount
        <hr />
        <button onClick={()=>this.setState({flag:!this.state.flag})}>切换显示隐藏Unmount组件</button>
       {
        this.state.flag? <Unmount/>:''
       }
       <div style={{height:'2000px'}}></div>
      </div>
    );
  }
}
