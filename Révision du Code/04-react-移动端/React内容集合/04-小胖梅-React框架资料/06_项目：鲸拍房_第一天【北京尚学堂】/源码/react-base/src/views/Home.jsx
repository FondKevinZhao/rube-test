import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class Home extends Component {
 constructor(){
  super()
  this.state={
    id:8899,
  }
 }
 //编程式导航
 goUser(){
  console.log(this.props);
  //history.push('/path')
  this.props.history.push('/user')
}
goMusic(id){
  this.props.history.push('/song/123')
}
  render() {
    return (
      <div>
        Home
        <hr />
        <h3>标签导航</h3>
        <NavLink to='/user'>个人中心</NavLink>
        <NavLink to='/song/456'>音乐列表</NavLink>
        <NavLink to={'/song/'+this.state.id}>音乐列表</NavLink>

        <h3>编程式导航</h3>
        <button onClick={this.goUser.bind(this)}>跳转个人中心</button>
        <button onClick={this.goMusic.bind(this,2233)}>跳转音乐列表</button>
        <hr />

       
      </div>
    )
  }
}
