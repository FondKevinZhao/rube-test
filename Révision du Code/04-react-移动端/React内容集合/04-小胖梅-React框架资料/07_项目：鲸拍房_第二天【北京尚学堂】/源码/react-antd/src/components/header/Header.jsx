import React, { Component } from 'react'
import { Menu } from 'antd';
import { EnvironmentOutlined, AppstoreOutlined, ShoppingOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import header from './index.module.less'
/* 
    menu 是菜单容器  mode菜单显示水平垂直   defaultSelectedKeys 默认高亮菜单
    Menu.Item 菜单的每一项 
    Menu.SubMenu 下拉菜单
*/
export default class Header extends Component {
  render() {
    return (
        <>
        <div className={header.content}>
        <div className={header.nav}>
            <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
                <Menu.Item key="mail" style={{color:'#fff'}} icon={<EnvironmentOutlined />}>
                    <NavLink to='/'>目的地</NavLink>
                </Menu.Item>
                <Menu.Item key="shop" style={{color:'#fff'}} icon={<ShoppingOutlined />}>
                    <NavLink to='/shop'>商城</NavLink>
                </Menu.Item>
                <Menu.SubMenu key="SubMenu" title="社区" style={{color:'#fff'}} icon={<AppstoreOutlined />}>
                    <Menu.Item key="two" icon={<AppstoreOutlined />}>
                        当地玩乐
                    </Menu.Item>
                    <Menu.Item key="three" icon={<AppstoreOutlined />}>
                        租车自驾
                    </Menu.Item>
              </Menu.SubMenu>
        </Menu>
        </div>
      {/* 右侧登录 */}
      <div className={header.login}>
        <NavLink to='/login'>登录</NavLink>
      </div>
        </div>
      </>
    )
  }
}
