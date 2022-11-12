import React, { Component } from 'react'
//高阶组件 --  路由内置的 
import { NavLink,withRouter } from 'react-router-dom'

class Center extends Component {
    tiao(){
        console.log(this);
        //有返回功能 
        // this.props.history.push('/user')
        //替换 关闭当前页面 跳转到某个页面
        this.props.history.replace('/user')
    }
  render() {
    return (
      <div>Center

        <NavLink to='/user'>跳转个人中心</NavLink>
        <br />
        <button onClick={this.tiao.bind(this)}>跳转个人中心</button>
      </div>
    )
  }
}
export default withRouter(Center)