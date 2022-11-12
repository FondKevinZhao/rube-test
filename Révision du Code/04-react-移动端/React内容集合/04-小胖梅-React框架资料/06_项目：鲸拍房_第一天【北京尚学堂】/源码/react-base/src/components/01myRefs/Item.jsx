import React, { Component } from 'react'

export default class Item extends Component {
    constructor(){
        super()
        this.state={
            num:100
        }
        this.pref= React.createRef()
        
    }
  render() {
    return (
      <div>Item
        <p ref={this.pref}>我是子组件的普通DOM元素</p>
      </div>
    )
  }
}
