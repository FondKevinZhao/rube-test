import React, { Component } from 'react'
import { NavLink ,Outlet } from 'react-router-dom'
import './index.css'
export default class Index extends Component {

  render() {
    return (
      <div>文档界面
        <hr />
        {/* 左侧导航 */}
        <div>
            <NavLink to='/wendang/start' className={({ isActive }) =>isActive ?"myActive":""}>开始</NavLink>
            <br />
            <NavLink to='/wendang/cdn' className={({ isActive }) =>isActive ?"myActive":""}>CDN</NavLink>
        </div>

        {/* 右侧内容 */}
        <Outlet></Outlet>
            
      </div>
    )
  }
}
