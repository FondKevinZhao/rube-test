import React, { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

import Home from "./pages/Home";
import Pins from "./pages/Pins";
import Books from "./pages/Books";
import Events from "./pages/Events";

export default class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <ul>
            <li>
              <NavLink to="/">首页</NavLink>
            </li>
            <li>
              <NavLink to="/pins">沸点</NavLink>
            </li>
            <li>
              <NavLink to="/books">小册</NavLink>
            </li>
            <li>
              <NavLink to="/events">活动</NavLink>
            </li>
          </ul>
        </header>
        <div>
          <Switch>
            {/* 
              Route的path匹配规则，默认以path开头的路径就会匹配上 
              加上exact属性，匹配规则就是全匹配（必须一模一样）
            */}
            <Route path="/" component={Home} exact />
            <Route path="/pins" component={Pins} exact />
            <Route path="/books" component={Books} exact />
            <Route path="/events" component={Events} exact />
          </Switch>
        </div>
      </Router>
    );
  }
}
