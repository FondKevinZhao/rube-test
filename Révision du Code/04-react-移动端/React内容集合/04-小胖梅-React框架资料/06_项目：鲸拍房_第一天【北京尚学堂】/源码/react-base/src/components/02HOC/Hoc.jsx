import React, { Component } from 'react'
import About from './About'
import News from './News'
//存储数据
localStorage.setItem('username','react-admin')
export default class Hoc extends Component {
  render() {
    return (
      <div>Hoc
        <hr />
        <News/>
        <hr />
        <About/>
      </div>
    )
  }
}
