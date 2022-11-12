import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'
export default class Dialog extends Component {
    //定义函数--隐藏弹框---
    close=()=>{
        //修改this.props.isShow变量 只读属性 通过父组件修改
        this.props.hide()
    }
  render() {
    return (
      <div className={style.bg} style={{visibility:this.props.isShow}} onClick={this.close}>
        <div className={style.box} onClick={(e)=>e.stopPropagation()}>
           <h3>{this.props.title}</h3>
           {/* 扫码：图片   账号：表单*/}
            {
                this.props.children
            }

        </div>
      </div>
    )
  }
}
Dialog.propTypes={
    isShow:PropTypes.string,
    title:PropTypes.string.isRequired
}
Dialog.defaultProps={
    isShow:'hidden'
}

