import React, { Component } from 'react'
import Ceng2 from './Ceng2'

export default class Ceng1 extends Component {
  render() {
    return (
      <div>
        <h2>第二层</h2>
        <hr />
        <Ceng2 msg={this.props.msg}/>
      </div>
    )
  }
}
