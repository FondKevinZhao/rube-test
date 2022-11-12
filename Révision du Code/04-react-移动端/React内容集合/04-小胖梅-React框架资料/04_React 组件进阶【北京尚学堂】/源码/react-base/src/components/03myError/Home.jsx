import React, { Component } from "react";
import Child from "./Child";
import ErrorPage from "./ErrorPage";
import Son from "./Son";

export default class Home extends Component {
  render() {
    return (
      <div>
        Home
        <hr />
        <ErrorPage>
            <Son /> 
            <hr />
            <Child /> 
        </ErrorPage>
       
      </div>
    );
  }
}
