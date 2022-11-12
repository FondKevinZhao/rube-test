import React, { Component } from "react";
import Header from "../../components/header/Header";
export default class Layout extends Component {
  render() {
    return (
      <div>
        {/* <div>
          <NavLink to="/" exact>目的地</NavLink>
          <NavLink to="/shop">商城</NavLink>
        </div> */}
      <div style={{position:'absolute',top:'0',left:'0',right:"0",zIndex:1}}>
        <Header/>
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
