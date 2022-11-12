import React from 'react'
import {connect} from 'react-redux'

 function Login(props) {
  return (
    <div>Login
        <input type="text" name="" id="" />
        <p>用户名：{props.info.user}</p>
    </div>
  )
}
export default connect(state=>{
    return {
        info:state.user
    }
})(Login)