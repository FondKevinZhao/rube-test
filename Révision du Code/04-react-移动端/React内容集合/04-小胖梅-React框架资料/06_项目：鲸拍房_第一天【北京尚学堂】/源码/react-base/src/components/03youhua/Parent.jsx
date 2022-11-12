import React, { Component } from 'react'
import Son1 from './Son1'
import Son2 from './Son2';

export default class Parent extends Component {
    constructor(){
        super()
        this.state={
            num:100,
            msg:'hello'
        }
    }
  render() {
    console.log('parant render');
    return (
      <div>
        Parent
        <p>num:{this.state.num}</p>
        <button onClick={()=>this.setState({num:this.state.num+1})}>num++</button>
        <hr />
        {/* <Son1 num={this.state.num} /> */}
        {/* <Son1 msg={this.state.msg} /> */}


        <Son2 msg={this.state.msg} num={this.state.num} />
      </div>
    )
  }
}
