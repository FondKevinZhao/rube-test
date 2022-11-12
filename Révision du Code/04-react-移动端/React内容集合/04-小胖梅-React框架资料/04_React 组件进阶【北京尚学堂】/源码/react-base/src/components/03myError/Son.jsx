import React, { Component } from 'react'

export default class Son extends Component {
  render() {
    return (
      <div>Son
        {/* 演示组件出错了 */}
        <p>{{user:'admin'}}</p>

      </div>
    )
  }
}
