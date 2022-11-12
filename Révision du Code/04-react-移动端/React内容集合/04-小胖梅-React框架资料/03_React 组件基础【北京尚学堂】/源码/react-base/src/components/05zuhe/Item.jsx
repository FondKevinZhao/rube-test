import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div>
        <h4>Item我是页面顶部</h4>
        {/* 预定义位置 */}
        {
            this.props.children
        }
        <div>我是页面底部</div>
      </div>
    )
  }
}
