import React, { Component } from 'react'
//导入类型
import PropTypes from 'prop-types'
export default class Pagination extends Component {
  render() {
    return (
      <div>
        <h3>分页组件--公共组件</h3>
        <p>{this.props.total}</p>
      </div>
    )
  }
}
//对当前的组件接受props数据类型限制
Pagination.propTypes={
    //左侧接受的props变量名称  右侧类型检测
    total:PropTypes.number,//数字类型
    msg:PropTypes.string,//字符串
    arr:PropTypes.array,//数组类型
    fun:PropTypes.func,//函数
    //满足类型中一个
    str:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    //必选
    // 你可以在任何 PropTypes 属性后面加上 `isRequired` ，确保
    // 这个 prop 没有被提供时，会打印警告信息。
    current:PropTypes.number.isRequired,
    //任意类型
    current:PropTypes.any.isRequired,

}
//设置当前组件的接受的变量props 默认值  如果传递了这个变量覆盖默认值 
Pagination.defaultProps={
    total:88,
}