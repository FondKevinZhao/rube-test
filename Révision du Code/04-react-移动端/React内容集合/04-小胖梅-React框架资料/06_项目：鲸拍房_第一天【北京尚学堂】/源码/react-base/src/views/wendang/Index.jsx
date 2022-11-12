import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Index extends Component {
  render() {
    return (
      <div>
        <h2>文档界面---布局--二级导航</h2>
      
        {/* 左侧内容展示 */}
        <div style={{width:'800px',float:'left',border:'1px solid #999'}}>
            {/* 预留空间---展示路由出口 */}
            { this.props.children }
        </div>

        {/* 右侧导航 */}
        <div>
            <NavLink to='/wendang/start'>开始</NavLink> <br />
            <NavLink to='/wendang/cdn'>CDN</NavLink>
        </div>
      </div>
    )
  }
}
