import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
export default class Layout extends Component {
  render() {
    return (
      <div>
            <NavLink to='/' end>首页</NavLink>
            <NavLink to='/news'>新闻</NavLink>
            <NavLink to='/user' >个人中心</NavLink>
            <NavLink to='/xiangqing/123'>详情页面</NavLink>
            <NavLink to='/wendang'>文档</NavLink>
        <hr/>
        <Outlet></Outlet>

      </div>
    )
  }
}
