import React, { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

import routes from "./routes";

export default class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <ul>
            {routes.map((route) => {
              return (
                <li key={route.path}>
                  <NavLink to={route.path}>{route.title}</NavLink>
                </li>
              );
            })}
          </ul>
        </header>
        <div>
          <Switch>
            {/* 
              Route的path匹配规则，默认以path开头的路径就会匹配上 
              加上exact属性，匹配规则就是全匹配（必须一模一样）
            */}
            {routes.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  component={route.component}
                  exact
                />
              );
            })}
          </Switch>
        </div>
      </Router>
    );
  }
}
