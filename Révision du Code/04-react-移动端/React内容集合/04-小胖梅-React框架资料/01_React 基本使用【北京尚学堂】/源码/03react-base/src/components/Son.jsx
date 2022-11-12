import React, { Component } from 'react'

export default class Son extends Component {
  render() {
    //接受其他组件使用当前组件的时候传递的参数
    console.log(this.props);
    //修改props传递数据 =--报错  props只只读属性
    // this.props.str='新内容';
    
    return (
      <div>Son
        <p>介绍父组件传递的数据：{this.props.msg}</p>
        <p>介绍父组件传递的数据：{this.props.str}</p>
        {/* <p>{ this.props.arr }</p> */}
        {
            this.props.arr.map((ele,index)=>{
                return <p key={index}>{ ele }</p>
            })
        }
      </div>
    )
  }
}
