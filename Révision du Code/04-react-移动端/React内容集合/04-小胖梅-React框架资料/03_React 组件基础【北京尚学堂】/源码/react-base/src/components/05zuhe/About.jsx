import React, { Component } from 'react'
import Item from './Item'

export default class About extends Component {
  render() {
    return (
      <div>
        <h2>组合--预定义空间位置</h2>
        {/* 第一次使用Item组件 */}
        <Item>
        <ul>
                <li>我是预留位置内容</li>
                <li>我是预留位置内容</li>
                <li>我是预留位置内容</li>
                <li>我是预留位置内容</li>
            </ul>
        </Item>

        {/* 第二次使用 */}
        <Item>
            <div>我是内部区域</div>
            <p>ahahah </p>
            <p>ahahah </p>
            <p>ahahah </p>
            <p>ahahah </p>
        </Item>
      </div>
    )
  }
}
