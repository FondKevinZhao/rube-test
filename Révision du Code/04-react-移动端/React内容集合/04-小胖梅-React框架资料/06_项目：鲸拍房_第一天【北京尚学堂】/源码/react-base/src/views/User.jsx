import React, { Component } from 'react'

export default class User extends Component {
  goBack(){
    // this.props.history.goBack()
    this.props.history.go(-1)
  }
  render() {
    return (
      <div>User
        <hr />
        <button onClick={this.goBack.bind(this)}>返回</button>
      </div>
    )
  }
}
