import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div>Child
        <p ref={this.props.other}>我是child-dom元素</p>
      </div>
    )
  }
}
