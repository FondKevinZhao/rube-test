import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class Layout extends Component {
  render() {
    return (
      <div>
        <div>
          <NavLink to="/" exact>首页</NavLink>
          <NavLink to="/new">新房</NavLink>
        </div>

        <div>
            {
                this.props.children
            }
        </div>
      </div>
    );
  }
}
