import React, { Component } from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";

/*
  BrowserRouter 使用history模式的前端路由
    必须要在最外层使用，否则 Route,Link,NavLink,Switch,Redirect,组件就不能使用
  HashRouter 使用hash模式的前端路由
    必须要在最外层使用，否则 Route,Link,NavLink,Switch,Redirect,组件就不能使用
  Route 根据路由路径的变化，加载显示相应的路由组件
  Link 相当于a标签，特点：1. 不会刷新  2. 只会做路由跳转（更新地址）
    to 路由路径
  NavLink, 和Link基本一致，不同的是选中时会添加一个类名：active
    activeClassName="my-active" 修改选中的类名
  Switch 让内部Route只加载显示一个
  Redirect 
    匹配所有地址，并重定向一个新地址
    特点：一旦前面的Route匹配上了，Redirect就不生效了
*/

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink to="/about" className="list-group-item">
                About
              </NavLink>
              <NavLink to="/home" className="list-group-item">
                Home
              </NavLink>
            </div>
          </div>

          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  <Redirect to="/home" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
