import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";

import Detail from "../Detail";

export default class Message extends Component {
  push = (id) => {
    return () => {
      // 编程式导航
      this.props.history.push(`/home/message/${id}`, { name: "jack", age: 18 });
    };
  };

  replace = (id) => {
    return () => {
      // 编程式导航
      this.props.history.replace(`/home/message/${id}`);
    };
  };

  back = () => {
    this.props.history.goBack();
  };

  forward = () => {
    this.props.history.goForward();
  };

  render() {
    return (
      <div>
        <h2>Message</h2>
        <ul>
          <li>
            {/* 路由链接跳转 */}
            <NavLink to="/home/message/1?name=jack&age=18">Message001</NavLink>
            <button onClick={this.push(1)}>push</button>
            <button onClick={this.replace(1)}>replace</button>
          </li>
          <li>
            <NavLink to="/home/message/3">Message003</NavLink>
            <button onClick={this.push(3)}>push</button>
            <button onClick={this.replace(3)}>replace</button>
          </li>
          <li>
            <NavLink to="/home/message/5">Message005</NavLink>
            <button onClick={this.push(5)}>push</button>
            <button onClick={this.replace(5)}>replace</button>
          </li>
        </ul>
        <button onClick={this.back}>back</button>
        <button onClick={this.forward}>forward</button>
        {/* 
          动态路由：多对一关系 
          什么是路由组件：
            通过 Route 组件加载的组件，就是路由组件
          路由组件由三个属性：
            history
              goBack goForward push replace 更新浏览器历史记录（进行路由跳转）
            location
              pathname 当前路由路径
              state
            match
              :id --> 叫做params参数
              params params参数的值

           路由传参：
            1. params
              - 定义  <Route path="/home/message/:id" ...></Route>
              - 传递参数
                  <NavLink to="/home/message/3">Message003</NavLink>
              - 读取
                this.props.match.params.id
            2. query
              - 传递参数
                  <NavLink to="/home/message/3?name=jack&age=18">Message003</NavLink>
              - 读取
                this.props.location.search
            3.state         
        */}
        <Route path="/home/message/:id" component={Detail} />
      </div>
    );
  }
}
