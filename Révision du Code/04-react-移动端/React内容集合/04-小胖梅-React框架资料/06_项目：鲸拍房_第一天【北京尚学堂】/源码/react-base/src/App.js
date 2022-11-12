import React, { Component } from 'react'
/* import Home from './components/01myRefs/Home'
import Hoc from './components/02HOC/Hoc'
import Mount from './components/03youhua/Mount'
import Parent from './components/03youhua/Parent' */
//2. 导入页面-组件
import Home from './views/Home'
import News from './views/News'
import User from './views/User'
import Song from './views/Song'
import Index from './views/wendang/Index'
import CDN from './views/wendang/CDN'
import Start from './views/wendang/Start'
import './app.css'
//1. 导入路由模块
import {BrowserRouter,HashRouter as Router,Route,Switch,Link,NavLink, Redirect} from 'react-router-dom'
//BrowserRouter,HashRouter 路由包裹容器
//<Switch> 选择一个路由地址 匹配路径 停止匹配
//Route 路由配置 属性：path='/路径' component={ 组件名 }  exact 精准匹配
//Link 定义导航 属性：to='/路径--同步path' exact 精准匹配
//NavLink 动态添加class属性 配置高亮效果
export default class App extends Component {
  render() {
    return (
      <Router>
       
       <div className='nav'> 
          <NavLink exact to='/'>首页</NavLink> |   
          <NavLink to='/news'>新闻</NavLink> |   
          <NavLink to='/user'>个人中心</NavLink> |
          <NavLink to='/song/123456'>音乐播放列表</NavLink>    |
          <NavLink to='/wendang'>文档</NavLink> 
        </div>
          <Switch>
            {/* 一级路由 */}
            <Route exact path='/' component={Home} />
            <Route path='/news' component={News} />
            <Route path='/user' component={User} />
            {/* 动态路由--路由参数：进入当前界面需要传递参数 
              路由参数：path='/地址路径/:变量名'  把访这个path传递给变量名
              地址栏：xxx/song/123   songId=123
            */}
            <Route path='/song/:songId' component={Song} />
            {/* 路由嵌套 :一级 文档界面   二级导航：开始start CDN 
                1. 嵌套的最大的组件 路由配置的时候做标签 <组件 path='/xx'></组件>
                2. 二级导航 <Route path='/wendang/start' component={组件}/>
                3. 配置了路由嵌套 嵌套的路由需要配置出口   哪里配置出口 --文档界面 --到显示的组件配置出口
                  { this.props.children }
            */}
            <Index path='/wendang'>
              <Redirect to='/wendang/start'/>
              <Route path='/wendang/start' component={Start}/>
              <Route path='/wendang/cdn' component={CDN}/>
            </Index>
            {/* 重定向  访问的路径定位到哪个地方 from=''来自哪里 * 所有内容 to到哪里 */}
            <Redirect from='/*' to='/'/>
          </Switch>
      </Router>
    )
  }
}
