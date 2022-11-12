import React, { Component } from 'react'
import Kuayu from './components/01http/Kuayu'
// import Fetch from './components/01http/Fetch'
import Myaxios from './components/01http/Myaxios'
import Parent from './components/02MyContext/Parent'
import Home from './components/03myError/Home'
import List from './components/04myFragments/List'


export default class App extends Component {
  render() {
    return (
      <>
        <List/>
        {/* <Home/> */}
        {/* context */}
        {/* <Parent/> */}
        {/* 网络请求 */}
        {/* <Kuayu/> */}
        {/* <Myaxios/> */}
        {/* <Fetch/> */}
      </>
    )
  }
}
